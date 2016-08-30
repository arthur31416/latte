import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, Linking } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'
import auth from '../Config/Auth'
import qs from 'shitty-qs'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  static propTypes = {
    componentExamples: PropTypes.func,
    usageExamples: PropTypes.func,
    apiTesting: PropTypes.func,
    theme: PropTypes.func,
    deviceInfo: PropTypes.func
  }

  state = {
    code: ''
  }

  componentWillMount () {
    this.slackAuth(auth, this.getToken)
  }

  slackAuth = (auth, cb) => {
    Linking.openURL([
      'https://slack.com/oauth/authorize',
      '?client_id=' + auth.client_id,
      '&scope=' + auth.scope,
      '&redirect_uri=' + auth.redirect_uri
    ].join(''))

    Linking.addEventListener('url', handleUrl)

    function handleUrl (event) {
      const [, queryString] = event.url.match(/\?(.*)/)
      const query = qs(queryString)
      cb(query)
      Linking.removeEventListener('url', handleUrl)
    }
  }

  getToken = query => {
    // const { authenticate } = this.props

    const url = [
      'https://slack.com/api/oauth.access',
      '?client_id=' + auth.client_id,
      '&client_secret=' + auth.client_secret,
      '&code=' + query.code
    ].join('')

    fetch(url)
      .then(res => res.json())
      .then(resJson => console.log(resJson))
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Hello Kitty.
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ authentification }) => ({
  authentification
})

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: query => dispatch(Actions.authenticate(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)

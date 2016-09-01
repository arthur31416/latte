import React, {PropTypes} from 'react'
import { ScrollView, Text, View, Linking } from 'react-native'
import { connect } from 'react-redux'

import ListMessages from '../Components/ListMessages'

import Actions from '../Actions/Creators'
import auth from '../Config/Auth'
import authService from '../Services/Auth'
import qs from 'shitty-qs'

// Styles
import styles from './Styles/PresentationScreenStyle'

const DEBUGGING = true

class PresentationScreen extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired
  }

  state = {
    userId: null,
    teamName: null
  }

  componentWillMount () {
    const { authenticate } = this.props

    if (!DEBUGGING) {
      this.slackAuth(auth, query => {
        authService.getToken(auth, query.code)
          .then(authenticate)
          .then(({ infos }) => {
            this.setState({
              userId: infos.user_id,
              teamName: infos.team_name
            })
          })
      })
    }
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

  render () {
    const { messages } = this.props
    const { userId, teamName } = this.state

    if (!DEBUGGING && !userId) {
      return (
        <View style={styles.centeredContainer}>
          <Text style={styles.sectionText}>
            Loading...
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Hello Kitty.
            </Text>

            <Text style={styles.sectionText}>
              user_id: {userId}
            </Text>

            <Text style={styles.sectionText}>
              team_name: {teamName}
            </Text>
          </View>

          <ListMessages messages={messages} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ authentification, messages }) => ({
  authentification,
  messages
})

const mapDispatchToProps = dispatch => ({
  authenticate: infos => dispatch(Actions.authenticate(infos))
})

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)

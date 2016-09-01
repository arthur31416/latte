import React from 'react'
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
// import { Metrics } from '../Themes'
// external libs
// import Icon from 'react-native-vector-icons/FontAwesome'
// import Animatable from 'react-native-animatable'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/AddMessageStyle'

// I18n
// import I18n from '../I18n/I18n.js'

class AddMessage extends React.Component {
  _onPress = () => {
    const { addMessage } = this.props
    const message = {
      label: `fakeLabel-${Math.round(Math.random() * 100)}`,
      channelId: 'fakeChannelId',
      sendAt: Math.round((Date.now() + 100000 * Math.random()) / 100),
      tags: [ 'fakeTag1', 'fakeTag2' ]
    }

    addMessage(message)
    NavigationActions.pop()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>
              <View style={styles.section}>
                <TouchableOpacity onPress={this._onPress}>
                  <Text style={styles.sectionText}>
                    Add Message Section
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: infos => dispatch(Actions.addMessage(infos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage)

import React, { PropTypes } from 'react'
import { View, StatusBar, Linking } from 'react-native'
import { Provider } from 'react-redux'
import Actions from './Actions/Creators'
import DebugSettings from './Config/DebugSettings'
import NavigationRouter from './Navigation/NavigationRouter'
// import './Config/PushConfig'
import auth from "./Config/Auth";

// Styles
import styles from './Containers/Styles/RootStyle'

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount () {
    const { dispatch } = this.props.store
    dispatch(Actions.startup())

    Linking.openURL([
      "https://slack.com/oauth/authorize",
      "?client_id=" + auth.client_id,
      "&scope=" + auth.scope,
      '&redirect_uri=' + auth.redirect_uri
    ].join(''))
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={this.props.store}>
        <View style={styles.applicationView}>
          <StatusBar
            barStyle='light-content'
          />
          <NavigationRouter />
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}

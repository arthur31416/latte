import React, { Component } from 'react'
import { Scene, Router, Modal } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AddMessage from '../Containers/AddMessage'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='modal' component={Modal}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonIconStyle={Styles.rightButton}>
            <Scene initial key='presentationScreen' component={PresentationScreen} title='Latte' renderRightButton={NavItems.addButton} onRight={() => window.alert('Example Pressed')} />
            <Scene key='addMessage' direction='vertical' component={AddMessage} title='Add Message' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter

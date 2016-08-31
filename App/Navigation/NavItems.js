import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors, Metrics } from '../Themes'

export default {
  addButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.addMessage}>
        <Icon name='ios-add'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonRight}
        />
      </TouchableOpacity>
    )
  },

  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='ion-ios-arrow-back'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  }
}

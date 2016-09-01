import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/ListMessagesStyle'

export default class ListMessages extends React.Component {

  // Prop type warnings
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  render () {
    const { messages } = this.props

    return (
      <View style={styles.container}>
        {
          messages.map((mess, index) => (
            <View
              key={mess.id}
              style={
                index === 0 ? styles.messageTop : styles.messageBottom
              }>
              <Text style={styles.secionText}>
                {mess.label}
              </Text>
            </View>
          ))
        }
      </View>
    )
  }
}

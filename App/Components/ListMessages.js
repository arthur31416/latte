import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'

import { Colors, Metrics } from '../Themes/'
import styles from './Styles/ListMessagesStyle'

export default class ListMessages extends React.Component {

  // Prop type warnings
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  render () {
    const { messages } = this.props
    const now = Math.round(Date.now() / 100)

    return (
      <View style={styles.mainContainer}>
        {
          messages
            .asMutable()
            .sort((a, b) => a.sendAt - b.sendAt)
            .map((mess, index) => {
              const past = mess.sendAt < now

              return (
                <View
                  key={mess.createdAt}
                  style={{
                    ...customStyles.message,
                    backgroundColor: past ? Colors.frost : Colors.snow,
                    borderTopWidth: index === 0 ? 1 : 0
                  }}>
                  <Text style={styles.sectionText}>
                    {mess.label}

                    <Text style={styles.subtitle}>
                      ({mess.sendAt})
                    </Text>
                  </Text>
                </View>
              )
            })
        }
      </View>
    )
  }
}

const customStyles = {
  message: {
    paddingTop: Metrics.doublePaddingVertical,
    paddingBottom: Metrics.doublePaddingVertical,
    paddingLeft: Metrics.basePaddingHorizontal,
    paddingRight: Metrics.basePaddingHorizontal,
    margin: 0,
    backgroundColor: Colors.snow,
    borderBottomWidth: 1,
    borderColor: Colors.frost
  }
}

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

const message = {
  paddingTop: Metrics.doublePaddingVertical,
  paddingBottom: Metrics.doublePaddingVertical,
  paddingLeft: Metrics.basePaddingHorizontal,
  paddingRight: Metrics.basePaddingHorizontal,
  margin: 0,
  backgroundColor: Colors.snow,
  borderBottomWidth: 1,
  borderColor: Colors.frost
}

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  messageTop: {
    ...message,
    borderTopWidth: 1
  },
  messageBottom: message
})

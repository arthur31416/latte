import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class AddMessage extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Add Message
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ authentification }) => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage)

import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      marginTop: Metrics.navBarHeight,
      backgroundColor: Colors.silver
    },
    centeredContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin
    },
    section: {
      margin: Metrics.section,
      paddingTop: Metrics.basePaddingVertical,
      paddingBottom: Metrics.basePaddingVertical,
      paddingLeft: Metrics.basePaddingHorizontal,
      paddingRight: Metrics.basePaddingHorizontal,
      backgroundColor: Colors.snow,
      borderRadius: Metrics.sectionRadius,
      borderColor: Colors.frost,
      borderWidth: 1
    },
    sectionText: {
      color: Colors.coal,
      marginVertical: Metrics.smallMargin,
      fontWeight: 'bold'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    }
  },
  darkLabelContainer: {
    backgroundColor: Colors.cloud,
    padding: Metrics.smallMargin
  },
  darkLabel: {
    fontFamily: Fonts.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles

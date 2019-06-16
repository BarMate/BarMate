import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)" // TODO: Change to fully transparent
    },
    contentContainer: {
      flex: 0.95,
      backgroundColor: "white",
      width: Dimensions.get("screen").width,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    },
    pulldownBarContainer: {
      flex: 0.05,
      justifyContent: "center",
      alignItems: "center",
      width: Dimensions.get("screen").width
    },
    pulldownBar: {
      backgroundColor: "white",
      borderRadius: 10,
      height: 8,
      width: 100
    }
});
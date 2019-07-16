import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 0.3,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 0.6,
    backgroundColor: '#302C9E',
  },
  extraIconContainer: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#302C9E',
    alignItems: 'center'
  },
});

export default styles;
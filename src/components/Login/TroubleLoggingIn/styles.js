import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    text: {
        color: '#302C9E',
        fontSize: wp('3%'),
    },
    rootContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
        fontFamily: 'HkGrotesk_Light',
        paddingTop: 20,
    },
})

export default styles;
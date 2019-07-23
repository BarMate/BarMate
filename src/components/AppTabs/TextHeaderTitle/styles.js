import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    header: {
        fontSize: wp('10%'),
        fontWeight: 'bold',
        fontFamily: 'HkGrotesk_Bold',
        color: 'white',
        marginBottom: wp('6%'),
        marginTop: wp('3%'),
        marginLeft: wp('7%'),
    },
})

export default styles;
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  input: {
    height: hp(4),
    width: wp(14),
    fontSize: hp(4),
    paddingVertical: 0,
    color: 'black',
  },
});
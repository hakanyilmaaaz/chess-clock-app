import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  input: {
    height: hp(5),
    width: wp(90),
    fontSize: hp(4),
    marginTop: hp(1.5),
    paddingVertical: 0,
    color: 'black',
  },
});

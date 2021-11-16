import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  menuButton: {
    height: hp(9),
    width: hp(9),
    borderRadius: 100,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: hp(0.3),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  icon: {
    height: wp(12),
    width: wp(12),
  },
});

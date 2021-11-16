import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  inputView: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  periodText: {
    fontSize: hp(3),
    color: 'gray',
  },
});
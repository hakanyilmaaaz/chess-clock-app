import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    height: hp(5),
    width: '100%',
    marginTop: hp(2),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: hp(2.1),
  },
});

import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    height: hp(100),
    width: wp(90),
    marginHorizontal: wp(5),
  },
  backView: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: hp(2.7),
  },
  backText: {
    fontSize: hp(2.2),
    color: 'black',
  },
  title: {
    fontSize: hp(2.2),
    fontWeight: 'bold',
    marginTop: hp(3),
    color: 'black',
  },
});

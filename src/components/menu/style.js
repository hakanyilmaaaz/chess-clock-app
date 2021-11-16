import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: hp(50),
    height: hp(0.5),
    width: wp(100),
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    zIndex: 1,
  },
  menuButton: {
    height: wp(22.3),
    width: wp(22.3),
    borderRadius: 100,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: hp(0.3),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  unBorderedMenuButton: {
    height: wp(22),
    width: wp(22),
    borderRadius: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  bigButton: {
    height: wp(35),
    width: wp(35),
    borderRadius: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

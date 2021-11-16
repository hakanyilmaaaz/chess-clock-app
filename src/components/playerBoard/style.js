import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  board: {
    flex: 1,
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  timerText: {
    fontSize: hp(7.5),
    fontWeight: '700',
    color: 'black',
  },
  move: {
    fontSize: hp(2),
    color: 'black',
    marginTop: hp(3),
    textAlign: 'center',
  },
  playerName: {
    fontSize: hp(3),
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: hp(3),
    textAlign: 'center',
  },
});

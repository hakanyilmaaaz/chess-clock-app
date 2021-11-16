import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    width: wp(90),
    marginTop: hp(2),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    borderLeftWidth: hp(0.1),
    borderRightWidth: hp(0.1),
  },
  itemView: {
    flex: 1,
    borderTopWidth: hp(0.2),
    borderBottomWidth: hp(0.2),
    borderLeftWidth: hp(0.1),
    borderRightWidth: hp(0.1),
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: 0,
  },
  itemText: {
    fontSize: hp(2),
    color: 'gray',
    textAlign: 'center',
  },
});

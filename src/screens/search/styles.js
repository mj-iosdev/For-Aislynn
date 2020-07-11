import {StyleSheet, StatusBar} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 45,
    width: '100%',
    backgroundColor: colors.black2fColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoText: {
    color: colors.whiteColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerRound: {
    height: 30,
    width: 30,
    backgroundColor: colors.whiteColor,
    borderRadius: 15,
  },
});
export default styles;

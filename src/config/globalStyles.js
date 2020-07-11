import {StyleSheet} from 'react-native';
import {deviceSize, deviceWidth, deviceHeight} from './responsive';
import colors from './colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themePrimaryColor,
  },
  flexRow: {
    flexDirection: 'row',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  flexBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStart: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  selfEnd: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  metroBlack: {
    fontFamily: 'metroBlack',
  },
  metroBold: {
    fontFamily: 'metroBold',
  },
  metroExtraBold: {
    fontFamily: 'metroExtraBold',
  },
  metroMedium: {
    fontFamily: 'metroMedium',
  },
  row: {
    flexDirection: 'row',
  },
  loaderCon: {
    flex: 1,
    position: 'absolute',
    height: deviceHeight,
    width: deviceWidth,
    zIndex: 9999,
  },
});
export default styles;

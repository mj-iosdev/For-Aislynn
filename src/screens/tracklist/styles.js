import {StyleSheet, StatusBar} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import colors from '../../config/colors';
import {color} from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: colors.black2fColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    shadowColor: colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    zIndex: 100,
  },
  logoText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontFamily: 'OpenSans-Semibold',
  },
  triangleImage: {
    height: 60,
    width: 60,
    borderTopLeftRadius: 5,
  },
  headerRound: {
    height: 20,
    width: 20,
    backgroundColor: colors.whiteColor,
    borderRadius: 10,
  },
  colorContainer: {
    flex: 1,
    backgroundColor: colors.blackColor,
  },
  backImage: {
    width: '100%',
    resizeMode: 'contain',
    ...ifIphoneX(
      {
        height: 217,
      },
      {
        height: 196,
      },
    ),
  },
  trackContainer: {
    ...ifIphoneX(
      {
        width: 360,
        height: 530,
      },
      {
        width: 330,
        height: 390,
      },
    ),
    top: -100,
    alignSelf: 'center',
    backgroundColor: colors.black2fColor,
    borderRadius: 5,
    paddingBottom: 5,
  },
  pigImage: {
    height: 26,
    width: 26,
    borderRadius: 13,
    resizeMode: 'cover',
    marginLeft: 5,
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  titleText: {
    fontSize: 25,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
    color: colors.whiteColor,
  },
  avatarImage: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
  autherText: {
    fontSize: 18,
    fontFamily: 'OpenSans-Semibold',
    textAlign: 'center',
    color: colors.whiteColor,
    marginTop: 5,
  },
  descriptionText: {
    color: colors.whiteColor,
    marginTop: 4,
    fontFamily: 'OpenSans-Light',
  },
  listenButton: {
    height: 40,
    width: '100%',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 30,
  },
  trackListText: {
    color: colors.whiteColor,
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginTop: 5,
  },
  listenButtonText: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
  },
  listContainer: {
    marginTop: 25,
  },
  renderItem: {
    flexDirection: 'row',
    marginBottom: 24,
    marginLeft: 10,
  },
  indexText: {
    color: colors.textColor,
    fontFamily: 'OpenSans-Semibold',
  },
  nameText: {
    color: colors.whiteColor,
    fontSize: 13,
    fontFamily: 'OpenSans-Semibold',
  },
  trackDes: {
    color: colors.whiteColor,
    marginTop: 2,
    fontFamily: 'OpenSans-Light',
  },
  durationContainer: {
    flex: 0.45,
    alignItems: 'flex-end',
  },
  duretionText: {
    color: colors.textColor,
    fontSize: 13,
    fontFamily: 'OpenSans-Semibold',
  },
  playcontrolle: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
});
export default styles;

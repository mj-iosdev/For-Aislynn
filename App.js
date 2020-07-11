/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import AppNavigator from './src/route';
import {isIphoneX} from 'react-native-iphone-x-helper';
import colors from './src/config/colors';

const App: () => React$Node = () => {
  let statusBarHeight = 0;
  console.disableYellowBox = true;
  if (isIphoneX()) {
    statusBarHeight = 44;
  } else {
    statusBarHeight = 20;
  }
  return (
    <>
      <View
        style={{
          backgroundColor: colors.black2fColor,
          height:
            Platform.OS === 'ios' ? statusBarHeight : StatusBar.currentHeight,
        }}>
        <StatusBar
          translucent
          backgroundColor={colors.black2fColor}
          barStyle="light-content"
        />
      </View>
      <StatusBar barStyle="light-content" backgroundColor={'red'} />
      <AppNavigator />
    </>
  );
};

export default App;

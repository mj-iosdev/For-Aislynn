import React from 'react';
import {View} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './components/Icon';

import TrackList from './screens/tracklist/TrackList';
import MusicPlayer from './screens/musicplayer/MusicPlayer';
import Search from './screens/search/Search';
import colors from './config/colors';

const BottomTab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TrackList"
      tabBarOptions={{
        style: {
          backgroundColor: colors.black2fColor,
          borderTopColor: colors.black2fColor,
          left: 0,
          right: 0,
          bottom: 0,
          paddingTop: 15,
          ...ifIphoneX(
            {
              height: 100,
            },
            {
              height: 60,
            },
          ),
        },
      }}>
      <BottomTab.Screen
        name="TrackList"
        component={TrackList}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Icon
              type={'MaterialCommunityIcons'}
              name={'headphones'}
              size={30}
              color={colors.whiteColor}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="playlists"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Icon
              type={'Ionicons'}
              name={'search'}
              size={30}
              color={colors.whiteColor}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MusicPlayer"
        component={MusicPlayer}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View>
              <View
                style={{
                  height: 4,
                  width: 20,
                  backgroundColor: colors.whiteColor,
                }}
              />
              <View
                style={{
                  height: 4,
                  width: 30,
                  backgroundColor: colors.whiteColor,
                  marginVertical: 7,
                }}
              />
              <View
                style={{
                  height: 4,
                  width: 40,
                  backgroundColor: colors.whiteColor,
                }}
              />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

import React from "react";
import { Platform } from "react-native";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AuthScreen from "../screens/AuthScreen";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

// navigationOptions: {
//     tabBarIcon: (tabInfo) => {
//       return (
//         <Ionicons name="ios-restaurant" size={25}  />
//       );
//     },
//     tabBarColor: Colors.primaryColor,
//   },

const settingStackNavigator = createStackNavigator({
  review: {
    screen: ReviewScreen,
  },
  settings: {
    screen: SettingsScreen,
  },
});

const MainTabNavigator = createBottomTabNavigator({
  Map: {
    screen: MapScreen,
  },
  Deck: {
    screen: DeckScreen,
  },
  Review: {
    screen: settingStackNavigator,
  },
});

const authTabNavigator = createBottomTabNavigator({
  welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  auth: {
    screen: AuthScreen,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  Maps: {
    screen: MainTabNavigator,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
});

export default createAppContainer(authTabNavigator);

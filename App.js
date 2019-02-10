import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
//UserStack
import Scan from './components/Scan.js';
import UserLanding from './components/UserLanding.js';
import Search from './components/Search.js';

//CommunityStack
import CommunityLanding from './components/CommunityLanding.js';

//MatchStack
import MatchLanding from './components/MatchLanding.js';

//MessagesStack
import MessagesLanding from './components/MessagesLanding.js';

const UserStack = createStackNavigator(
  {
    Landing: UserLanding,
    Scan: Scan,
    Search: Search,
  }
)

const CommunityStack = createStackNavigator(
  {
    Landing: CommunityLanding,
  }
)

const MatchStack = createStackNavigator(
  {
    Landing: MatchLanding,
  }
)

const MessagesStack = createStackNavigator(
  {
    Landing: MessagesLanding,
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Profile: UserStack,
    Communities: CommunityStack,
    Matches: MatchStack,
    Messages: MessagesStack,
  }
)

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

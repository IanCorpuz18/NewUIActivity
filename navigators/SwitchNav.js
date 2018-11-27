import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TopNavi from './TopNavi';
import Shipping from '../screens/Shipping';
import CardStack from './CardStack';
import StackNav from './StackNav';
export default Switchnavi = createSwitchNavigator({
  Auth: StackNav,
  Home:Shipping,
  Second:CardStack
 
},{
initialRouteName: 'Auth'
})
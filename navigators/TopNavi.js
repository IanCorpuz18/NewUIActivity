import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 

import React from 'react'
import Address from '../screens/Address';
import ChooseCard from '../screens/ChooseCard';
import CardStack from './CardStack'
import Shipping from '../screens/Shipping'
export default TopNavi = createMaterialTopTabNavigator({
    Address : {
        screen:Address,
    navigationOptions: {
        tabBarLabel: 'Address',
    }
    },
    Shipping: {
        screen:Shipping,
    navigationOptions: {
        tabBarLabel: 'Shipping',
    }
    },
    Payment: {
        screen:CardStack,
    navigationOptions: {
        tabBarLabel: 'Payment',
    }
    
}
  },{
   swipeEnabled:false,
    initialRouteName:'Address',
    tabBarOptions:{
        style: {
            backgroundColor:'white',elevation:0
        },
        labelStyle:{
            fontSize:13,
            fontWeight:"bold"
        },
        activeTintColor: "green",
        inactiveTintColor: "black",
    
      indicatorStyle:{
          backgroundColor:"white"
      }
    }

  });
 
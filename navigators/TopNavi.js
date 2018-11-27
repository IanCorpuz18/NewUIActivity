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
            backgroundColor:'#2EC9A7',elevation:0,
            borderColor:"red"
        },
        labelStyle:{
            fontSize:13,
            fontWeight:"bold",
            // color:"white",
            color:"#F38D4E"
        },
        activeTintColor: "green",
        inactiveTintColor: "black",
        tabStyle:{
                backgroundColor:"#2EC9A7",
                
        },
      indicatorStyle:{
          backgroundColor:"white",
          width:10,
          height:10,
          borderRadius:5,
          borderColor:"red"
      }
    }

  });
 
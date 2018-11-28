import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import { Dimensions } from 'react-native'
import React from 'react'
import Address from '../screens/Address';
import ChooseCard from '../screens/ChooseCard';
import CardStack from './CardStack'
import Shipping from '../screens/Shipping'
export default TopNavi = createMaterialTopTabNavigator({
    Address : {
        screen:Address,
    navigationOptions: {
        tabBarLabel: "Address",
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
            backgroundColor:'#2EC9A7',
            elevation:0,
            // borderColor:"red",
            minHeight:70,
            justifyContent:"center",
            // height:70
            
        },
        labelStyle:{
            fontSize:15,
            fontWeight:"bold",
        },
        activeTintColor: "#F38C4F",
        inactiveTintColor: "#DAF4F0",
       
      indicatorStyle:{
          backgroundColor:"#F38C4F",
          width:10,
          top:63,
          height:10,
          borderRadius:5,
        //   borderColor:"red",
          marginLeft: Dimensions.get('window').width*.14
      }
    }

  });
 
import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import Address from '../screens/Address'
import Shipping from '../screens/Shipping';
import CardStack from './CardStack';
import Icon from 'react-native-vector-icons/Ionicons'
export default StackNav = createStackNavigator({
  Home:{
      screen:TopNavi,
      navigationOptions:  {
        
        headerTintColor:"white",
        title: "Checkout",
        headerStyle:{
            backgroundColor:"#2ABB9C",
            textAlign:"center"
        },
        headerLeft:
            <Icon name="ios-menu" onPress={() => navigation.openDrawer()}
            size={30} color="white" style={{marginLeft:10}}/>,
        headerRight:
        <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
    }
    },
  Address:Address,
  Shipping:Shipping,
  CardStack:CardStack
},
    

    
)
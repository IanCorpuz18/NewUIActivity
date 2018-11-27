import React,{ Component }  from 'react'
import { createStackNavigator } from 'react-navigation'
import ChooseCard from '../screens/ChooseCard'
import ScanCard from '../screens/ScanCard'
export default CardStack = createStackNavigator({
  First:ChooseCard,
  Second:ScanCard
    
},
    {
        navigationOptions:{
            header:null
        }
    }

    
)
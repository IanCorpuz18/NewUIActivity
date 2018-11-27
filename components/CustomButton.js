import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const CustomButton = props => (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button,props.border, props.bgColor]}> 
    <Text style={[{color:'white'},props.textColor, props.textWeight]}>{props.children}</Text>
     </View>
        </TouchableOpacity>
   );
  const styles = StyleSheet.create({
    button: {
  padding: 10,
 margin: 5,
borderRadius: 20,
borderWidth: 2,
borderColor:'#FF5A5F',
alignItems: 'center',
 width:'80%',
alignSelf:'center',
backgroundColor:'#FF5A5F'
}
})
export default CustomButton;

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
// borderRadius: 20,
borderWidth: 2,
borderColor:'#F38B4C',
alignItems: 'center',
 width:'95%',
alignSelf:'center',
backgroundColor:'#F38B4C'
}
})
export default CustomButton;

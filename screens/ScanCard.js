import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import CustomButton from '../components/CustomButton';
import LocalImageApple from '../components/LocalImageApple'
import LocalImageVisa from '../components/LocalImageVisa'
import LocalImagePaypal from '../components/LocalImagePaypal'
import Icon from 'react-native-vector-icons/Ionicons'
import LocalImageJcb from '../components/LocalImageJcb'
import LocalImageMC from '../components/LocalImageMC'

class ScanCard extends Component {
    alertHolder=() => {
        Alert.alert(
            'Your Order is Finished!',
            "",
            [
         
              {text: 'OK', onPress: () => this.props.navigation.navigate('Address')},
            ],
            { cancelable: false }
          )
     }
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.NameTextInputHolder}>
                        <Text style={styles.TextYourName}>
                        Scan your card
                        </Text>
                </View>


                <View style={styles.CameraHolder}>
                <View style={styles.Holder}>
                <Icon name="ios-camera" size={35} color="gray"/>
                <Text style={styles.ScanText}>
                Save time and scan your credit card
                </Text>
                </View>
                <View style={styles.Proxy}>
                </View>
                </View>


                <View style={styles.CreditCardHolder}>
                <View style={styles.TitleCreditHolder}>
                <Text style={styles.CreditCardTitleText}>
                Credit Card #No
                </Text>
                </View>
                <View style={styles.ItemsHolder}>
                <View style={styles.CreditTextInputHolder}>
                <TextInput style={styles.CreditTextInput}/>
                </View>
                <View style={styles.IconHolder}>
                <LocalImageVisa 
                  source={require('../assets/visa.png')} 
                  originalWidth={4060}
                  originalHeight={1648}/>
                </View>
                </View>
                </View>

                <View style={styles.ShippingHolder3}>
              
                </View>
              

                <View style={styles.FooterTextsHolder}>

               
                </View>

                <View style={styles.ButtonHolder}>
                    <CustomButton onPress={this.alertHolder}
                    >Finish your Order</CustomButton>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white"
    },
    NameTextInputHolder: {
        flex: .4,
        backgroundColor: "white",
        justifyContent: 'flex-end',
        margin: 10,
    },
    TextYourName: {
        fontSize: 15,
        color: "#BFBFBF"
    },
    CreditTextInput:{
        width:"100%",
        borderColor: "black",
        borderWidth: 1,
    },
    Holder:{
        flex:7,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"space-around"
    },
    ScanText:{
            fontSize:16,
            fontWeight: 'bold',
    },
    Proxy:{
        flex:1
    },
    CameraHolder: {
        flex: .3,
        backgroundColor: "#F0F0F0",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: "center",
        margin:10
    },
    CreditCardHolder: {
        flex: .5,
        backgroundColor: "white",
        flexDirection:"column",
        justifyContent:"space-between",
        margin:10
    },
    TitleCreditHolder:{
        flex:.2
    },
    ItemsHolder:{
        flex:.4,
        flexDirection:"row"
    },
    CreditTextInputHolder:{
        flex:3
    },
    IconHolder:{
        alignItems:"flex-end",
        flex:1
    },
    ShippingHolder3: {
        flex: .5,
        backgroundColor: "white",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10
    },
    FooterTextsHolder:{
        flex:1.6,
    },
    ShippingTitleHolder:{
        flex:.3,
        flexDirection:"row"
    },  
    Shippingholder:{
        flex:1,
        margin:10,
        flexDirection:"row",
        
    },
    AddressTextsHolder:{
        flex:1,
        justifyContent:"flex-start",
        margin: 10,
    },
    ShippingTitleText:{
        fontSize:18,
        color: "#BFBFBF",
        marginRight:18
    },
    TextAddress:{
        fontSize:16,
        color:"black",
        fontWeight: 'bold',
    },
     Half:{
        flex:1
    },
    ButtonHolder: {
        flex: .4
    },
 
})
export default ScanCard;
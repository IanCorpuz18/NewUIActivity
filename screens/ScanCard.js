import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import CustomButton from '../components/CustomButton';
import LocalImageApple from '../components/LocalImageApple'
import LocalImageVisa from '../components/LocalImageVisa'
import LocalImagePaypal from '../components/LocalImagePaypal'
import Icon from 'react-native-vector-icons/Ionicons'
import LocalImageJcb from '../components/LocalImageJcb'
import LocalImageMC from '../components/LocalImageMC'
import LocalImageVisa2 from '../components/LocalImageVisa2'
import Fa from 'react-native-vector-icons/FontAwesome5'
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
                <LocalImageVisa2 
                  source={require('../assets/visa.png')} 
                  originalWidth={4060}
                  originalHeight={1648}/>
                </View>
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
                <Fa name="question-circle" size={40} color="#F38B4C" />
                </View>
                </View>
                </View>
              

                <View style={styles.FooterTextsHolder}>

                    <View style={styles.AgreementHolder}>

                    <View style={styles.DivisionRow}>

                    <View style={styles.CheckBoxAgreeHolder}>
                    <TextInput style={styles.AgreeCheckbox}/>
                    </View>
                   
                    <View style={styles.TextHolderAgree}>
                    <Text style={styles.AgreementText}>
                    Agree to our terms and conditions
                    </Text>
                    </View>

                    </View>

                    </View>

                    <View style={styles.AgreementTextHolder}>
                        <Text style={styles.AgreementContent}>
                        I agree that i have read and accepted our
                        </Text>
                        <View style={styles.ColortextHOlder}>
                        <Text style={styles.AgreementContent2}>
                        terms & conditions 
                        </Text>
                        <Text style={styles.AgreeContent3}>
                        for your purchase
                        </Text>
                        </View>
                    </View>

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
        flex: .075,
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
        flex:4,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"space-around"
    },
    ScanText:{
            fontSize:17,
            fontWeight: 'bold',
    },
    Proxy:{
        flex:1
    },
    CameraHolder: {
        flex: .1,
        backgroundColor: "#F0F0F0",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: "center",
        margin:10
    },
    CreditCardHolder: {
        flex: .275,
        backgroundColor: "white",
        flexDirection:"column",
        // justifyContent:"space-between",
        margin:10
    },
    TitleCreditHolder:{
        flex:.4
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
        // justifyContent:"space-between",
        margin:10
    },
    FooterTextsHolder:{
        flex:.6,
    },
    AgreementHolder:{
        flex:1.6,
        // flexDirection:"row"
    },
    DivisionRow:{
        flex:1,
        flexDirection:"row",
        alignItems: 'center',
    },
    CheckBoxAgreeHolder:{
        flex:2,
        justifyContent:"space-around",
        margin:10
    },
    TextHolderAgree:{
        flex:8
    },
    AgreeCheckbox:{
        borderColor:"black",
        borderWidth:1,
        width:25,
        height:25
    },
    AgreementTextHolder:{
        flex:1
    },
    AgreementText:{
        fontSize:18,
        fontWeight:"bold"
    },
    ButtonHolder: {
        flex: .2
    },
    ColortextHOlder:{
        flexDirection:"row"
    },
    AgreementContent2:{
        color:"#F38B4C",
        fontSize:16
    },
    AgreeContent3:{
        fontSize:16
    },
    AgreementContent:{
        fontSize:16
    }
})
export default ScanCard;
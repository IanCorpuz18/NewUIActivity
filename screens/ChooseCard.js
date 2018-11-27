import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CustomButton from '../components/CustomButton';
import LocalImageApple from '../components/LocalImageApple'
import LocalImageVisa from '../components/LocalImageVisa'
import LocalImagePaypal from '../components/LocalImagePaypal'
import Icon from 'react-native-vector-icons/Ionicons'
class ChooseCard extends Component {
   
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.NameTextInputHolder}>
                    <View style={styles.YournameHolder}>
                        <Text style={styles.TextYourName}>
                        How do you wish to pay?
                        </Text>
                    </View>
                
                </View>
                <View style={styles.ShippingHolder1}>
                <View style={styles.IconHolder}>
                    <TextInput style={styles.CheckBox}/>
                    <LocalImageVisa
                  source={require('../assets/visa.png')} 
                  originalWidth={4060}
                  originalHeight={1648}
                />
                </View>
                <View style={styles.TextTitleHolder}>
                <Text style={styles.TitleText}>Creditcard</Text>
                <Text style={styles.Subtitle}>Visa, Mastercard, JCB, Amex</Text>
                </View>
                </View>


                <View style={styles.ShippingHolder2}>
                <View style={styles.IconHolder}>
                <TextInput style={styles.CheckBox}/>
                    <LocalImagePaypal
                  source={require('../assets/Paypal.png')} 
                  originalWidth={1600}
                  originalHeight={456}
                />
                </View>
                <View style={styles.TextTitleHolder}>
                <Text style={styles.TitleText}>Paypal</Text>
                <Text style={styles.Subtitle}>No Additional Costs</Text>
                </View>
                </View>

                <View style={styles.ShippingHolder3}>
                <View style={styles.IconHolder}>
                <TextInput style={styles.CheckBox}/>
                    <LocalImageApple
                  source={require('../assets/applePay.png')} 
                  originalWidth={1192}
                  originalHeight={512}
                />
                </View>
                <View style={styles.TextTitleHolder}>
                <Text style={styles.TitleText}>FEDEX EXPRESS</Text>
                <Text style={styles.Subtitle}>Additional 12.99$</Text>
                </View>
                </View>
              

                <View style={styles.FooterTextsHolder}>

                <View style={styles.ShippingTitleHolder}>
               <View style={styles.Shippingholder}>
                <Text style={styles.ShippingTitleText}>
                Shipping Address
                </Text>
                <Icon name="ios-paper" size={30} color="#D2D2D2" />
                </View>
                
                <View style={styles.Half}>
                </View>

                </View>

                <View style={styles.AddressTextsHolder}>
                <Text style={styles.TextAddress}>Johnny Doe</Text>
                <Text style={styles.TextAddress}>11144 Military Trail (North)</Text>
                <Text style={styles.TextAddress}>Apartment #3122</Text>
                <Text style={styles.TextAddress}>23122 Palo Alot</Text>
                <Text style={styles.TextAddress}>California, United States</Text>
                </View>


                </View>

                <View style={styles.ButtonHolder}>
                    <CustomButton onPress={() =>
                        this.props.navigation.navigate('Shipping')}
                    >Next Step</CustomButton>
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
        flex: .3,
        backgroundColor: "white",
        justifyContent: 'center',
        margin: 10,

    },
    IconHolder:{
        flex:1,
        flexDirection:"row"
    },
    TextTitleHolder:{
        flex:1,
    },
    TitleText:{
        fontSize:21,
        fontWeight:"bold",
        alignSelf: "flex-end",
        
    },
    Subtitle:{
        color:"#D9D9D9",
        fontSize:13,
        alignSelf: "flex-end",
    },
    TextYourName: {
        fontSize: 15,
        color: "#BFBFBF"
    },

    ShippingHolder1: {
        flex: .5,
        backgroundColor: "white",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10
    },
    ShippingHolder2: {
        flex: .5,
        backgroundColor: "white",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10
    },
    ShippingHolder3: {
        flex: .5,
        backgroundColor: "white",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10
    },
    CheckBox:{
        width:25,
        height:25,
        borderWidth: 1,
        borderColor:"black",
        
        marginRight:25,
    },
    FooterTextsHolder:{
        flex:1.6,
        borderColor:"#E6E6E6",
        borderTopWidth:1
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
        flex: .5
    },
 
})
export default ChooseCard;
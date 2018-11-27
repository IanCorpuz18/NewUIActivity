import React, { Component } from 'react'
import {View,Text,StyleSheet, TextInput} from 'react-native'
import CustomButton from '../components/CustomButton';

   class Address extends Component{
     render(){
    return(
    <View style={styles.Container}>
    <View style={styles.NameTextInputHolder}>
    <View style={styles.YournameHolder}>
        <Text style={styles.TextYourName}>Your Name</Text>
        </View>
        <View style={styles.TextInputHolder}>
        
        <View style={styles.FirstNameHolder}>
        <TextInput style={styles.FnameTextInput} placeholder="First Name"/>
        </View>

        <View style={styles.LastNameHolder}>
        <TextInput style={styles.LnameTextInput} placeholder="Last Name"/>
        </View>

        </View>
    </View>


    <View style={styles.AddressHolder}>
    <View style={styles.AddressTextHolder}>
    <Text style={styles.AddressText}>
    Address line
    </Text>
    </View>

    <View style={styles.AddressTextInputHolder}>
    <TextInput style={styles.addressTextInput}/>
    </View>
    </View>

        <View style={styles.GeneralCityZipHolder}>
        <View style={styles.MainCityTextInputHolder}>
        <Text style={styles.CityText}>City</Text>
        <View style={styles.TextInputHolder}>
        <TextInput style={styles.CityTextInput}/>
        </View>
        </View>

        <View style={styles.MainZipTextInputHolder}>
        <Text style={styles.ZipText}>Zip</Text>
        <View style={styles.TextInputHolder}>
        <TextInput style={styles.ZipTextInput}/>
        </View>
        </View>
        </View>

        <View style={styles.GeneralStateCountryHolder}>
        <View style={styles.MainStateTextInput}>
        <Text style={styles.StateText}>State</Text>
        <View style={styles.TextInputHolder}>
        <TextInput style={styles.stateTextInput}/>
        </View>
        </View>

        <View style={styles.MainCountryTextInput}>
        <Text style={styles.CountryText}>Country</Text>
        <View style={styles.TextInputHolder}>
        <TextInput style={styles.countryTextInput}/>
        </View>
        </View>
        </View>

    <View style={styles.FooterTextsHolder}>
    <Text style={styles.ShippingText}>Shipping Options</Text>
    <Text style={styles.AnotherAddressText}>Please ship to another address</Text>
    </View>

        <View style={styles.ButtonHolder}>
        <CustomButton>Next Step</CustomButton>
        </View>

    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        backgroundColor:"white"
    },
    NameTextInputHolder:{
        flex:1.5,
        backgroundColor:"white"
    },
    YournameHolder:{
        flex:.5,
        justifyContent:"flex-end",
        marginLeft: 10,
    },
    TextYourName:{
        fontSize:15,
        color:"#BFBFBF"
    },
    TextInputHolder:{
        flex:1.5,
        flexDirection: 'row',
    },
    FirstNameHolder:{
        flex:1,
        backgroundColor:"green",
        margin: 10,
    },
    FnameTextInput:{
        width:"100%",
        backgroundColor:"gray"
    },
    LastNameHolder:{
        flex:1,
        backgroundColor:"blue",
        margin: 10,
    },
    LnameTextInput:{
        width:"100%",
        backgroundColor:"gray"
    },
    AddressHolder:{
        flex:1,
        backgroundColor:"orange"
    },
    AddressTextHolder:{
        flex:1
    },
    AddressText:{
        fontSize:12,
        color:"#BFBFBF"
    },
    AddressTextInputHolder:{
        flex:1,
        backgroundColor:"violet"
    },
    GeneralCityZipHolder:{
        flex:1,
        flexDirection:"row"
    },
    MainCityTextInputHolder:{
        flex:1
    },
    CityText:{
        fontSize:12,
        color:"#BFBFBF"
    },
    CityTextInput:{
        borderWidth:1,
        borderColor: "black",
        width:"80%"
    },
    MainZipTextInputHolder:{
        flex:1
    },
    ZipText:{
        fontSize:12,
        color:"#BFBFBF"
    },
    ZipTextInput:{
        borderWidth:1,
        borderColor: "black",
        width:"80%"
    },



    GeneralStateCountryHolder:{
        flex:1,
        flexDirection:"row"
    },
    MainStateTextInput:{
        flex:1
    },
    StateText:{
        fontSize:12,
        color:"#BFBFBF"
    },
    stateTextInput:{
        borderWidth:1,
        borderColor: "black",
        width:"80%"
    },
    MainCountryTextInput:{
        flex:1
    },
    CountryText:{
        fontSize:12,
        color:"#BFBFBF"
    },
    countryTextInput:{
         borderWidth:1,
        borderColor: "black",
        width:"80%"
    },
    FooterTextsHolder:{
        flex:1,
        backgroundColor:"red"
    },
    ShippingText:{
        fontSize:12,
        color:"#BFBFBF"
    },
    AnotherAddressText:{
        fontSize:12,
        color:"#BFBFBF"

    },
    ButtonHolder:{
        flex:1
    }
    })
export default Address;
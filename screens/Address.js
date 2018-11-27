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


    <View style={styles.AddressHolder2}>
    <View style={styles.AddressTextHolder2}>
    <Text style={styles.AddressText2}>
    Address line 2
    </Text>
    </View>

    <View style={styles.AddressTextInputHolder2}>
    <TextInput style={styles.addressTextInput2}/>
    </View>
    </View>

        <View style={styles.GeneralCityZipHolder}>
        <View style={styles.MainCityTextInputHolder}>
        <View style={styles.CityTextHolder}>
        <Text style={styles.CityText}>City</Text>
        </View>
        <View style={styles.CityInputHolder}>
        <TextInput style={styles.CityTextInput}/>
        </View>
        </View>

        <View style={styles.MainZipTextInputHolder}>
        <View style={styles.ZipTextHolder}>
        <Text style={styles.ZipText}>Zip</Text>
        </View>
        <View style={styles.ZipInputHolder}>
        <TextInput style={styles.ZipTextInput}/>
        </View>
        </View>
        </View>

        <View style={styles.GeneralStateCountryHolder}>
     
        <View style={styles.MainStateTextInput}>
        <View style={styles.StateTextHolder}>
        <Text style={styles.StateText}>State</Text>
        </View>
        <View style={styles.StateInputHolder}>
        <TextInput style={styles.stateTextInput}/>
        </View>
        </View>

        <View style={styles.MainCountryTextInput}>
        <View style={styles.CountryTextHolder}>
        <Text style={styles.CountryText}>Country</Text>
        </View>
        <View style={styles.CountryInputHolder}>
        <TextInput style={styles.countryTextInput}/>
        </View>
        </View>
        </View>

    <View style={styles.FooterTextsHolder}>
    <Text style={styles.ShippingText}>Shipping Options</Text>
    <Text style={styles.AnotherAddressText}>Please ship to another address</Text>
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
    Container:{ 
        flex:1,
        backgroundColor:"white"
    },
    NameTextInputHolder:{
        flex:.8,
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
        flex:1,
        flexDirection: 'row',
    },
    FirstNameHolder:{
        flex:1,
        backgroundColor:"white",
        margin: 10,
    },
    FnameTextInput:{
        width:"100%",
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black"
    },
    LastNameHolder:{
        flex:1,
        backgroundColor:"white",
        margin: 10,
    },
    LnameTextInput:{
        width:"100%",
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black"
    },
    AddressHolder:{
        flex:.9,
        backgroundColor:"white"
    },
    AddressTextHolder:{
        flex:.5,
        justifyContent:"flex-end",
        marginLeft: 10,
    },
    AddressText:{
        fontSize:15,
        color:"#BFBFBF",
    },
    AddressTextInputHolder:{
        flex:1,
        backgroundColor:"white",
        margin: 10,
    },
    addressTextInput:{
        width:"100%",
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black"
    },

    AddressHolder2:{
        flex:.9,
        backgroundColor:"white"
    },
    AddressTextHolder2:{
        flex:.5,
        justifyContent:"flex-end",
        marginLeft: 10,
    },
    AddressText2:{
        fontSize:15,
        color:"#BFBFBF",
    },
    AddressTextInputHolder2:{
        flex:1,
        backgroundColor:"white",
        margin: 10,
    },
    addressTextInput2:{
        width:"100%",
        backgroundColor:"white",
        borderWidth:1,
        borderColor:"black"
    },
    

    GeneralCityZipHolder:{
        flex:.8,
        flexDirection:"row"
    },
    MainCityTextInputHolder:{
        flex:1,
        // margin:10
    },
    CityTextHolder:{
        flex:.5,
        justifyContent:"flex-end",
        marginLeft: 10,
    },
    CityText:{
        fontSize:15,
        color:"#BFBFBF"
    },
    CityInputHolder:{
        flex:1.5,
         backgroundColor:"white",
        margin: 10,
    },
    CityTextInput:{
        borderWidth:1,
        borderColor: "black",
        width:"100%"
    },
    MainZipTextInputHolder:{
        flex:1,
        // margin:10
    },
    ZipTextHolder:{
        flex:.5,
        justifyContent:"flex-end",
        marginLeft: 10,
    },
    ZipText:{
        fontSize:15,
        color:"#BFBFBF"
    },
    ZipInputHolder:{
        flex:1.5,
         backgroundColor:"white",
        margin: 10,
    },
    ZipTextInput:{
        borderWidth:1,
        borderColor: "black",
        width:"100%"
    },



    GeneralStateCountryHolder:{
        flex:.8,
        flexDirection:"row"
    },
    MainStateTextInput:{
        flex:1,
        // margin:10
    },
    StateTextHolder:{
        flex:.5,
        justifyContent:"flex-end",
        marginLeft: 10,
    },
    StateText:{
        fontSize:15,
        color:"#BFBFBF"
    },
    StateInputHolder:{
        flex:1.5,
         backgroundColor:"white",
        margin: 10,
    },
    stateTextInput:{
        borderWidth:1,
        borderColor: "black",
        width:"100%"
    },
    MainCountryTextInput:{
        flex:1,
        // margin:10
    },
    CountryTextHolder:{
        flex:.5,
        justifyContent:"flex-end",
        marginLeft: 10,
    },
    CountryText:{
        fontSize:15,
        color:"#BFBFBF"
    },
    countryTextInput:{
         borderWidth:1,
        borderColor: "black",
        width:"100%"
    },  
    CountryInputHolder:{
        flex:1.5,
         backgroundColor:"white",
        margin: 10,
    },


    FooterTextsHolder:{
        flex:.5,
        backgroundColor:"white",
        margin:10,
        justifyContent:"space-around"
    },
    ShippingText:{
        fontSize:16,
        color:"#C9C9C9"
    },
    AnotherAddressText:{
        fontSize:14,
        color:"#F5AB7D"

    },
    ButtonHolder:{
        flex:.5  
    }
    })
export default Address;
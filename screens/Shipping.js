import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CustomButton from '../components/CustomButton';
import LocalImage from '../components/LocalImage'
import LocalImageUps from '../components/LocalImageUps'
import LocalImageFedx from '../components/LocalImageFedX'
import Icon from 'react-native-vector-icons/Ionicons'
class Shipping extends Component {
   
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.NameTextInputHolder}>
                    <View style={styles.YournameHolder}>
                        <Text style={styles.TextYourName}>Which shipping partner do you like?</Text>
                    </View>
                
                </View>
                <View style={styles.ShippingHolder1}>
                    <TextInput style={styles.CheckBox}/>
                    <LocalImage
                  source={require('../assets/DHL.png')} 
                  originalWidth={2000}
                  originalHeight={443}
                />
                <View style={styles.TextTitleHolder}>
                <Text style={styles.TitleText}>DHL</Text>
                <Text style={styles.Subtitle}>No Additional Costs</Text>
                </View>
                </View>


                <View style={styles.ShippingHolder2}>
                <TextInput style={styles.CheckBox}/>
                    <LocalImageUps
                  source={require('../assets/ups.png')} 
                  originalWidth={768}
                  originalHeight={914}
                />
                <View style={styles.TextTitleHolder}>
                <Text style={styles.TitleText}>DHL</Text>
                <Text style={styles.Subtitle}>No Additional Costs</Text>
                </View>
                </View>

                <View style={styles.ShippingHolder3}>
                <TextInput style={styles.CheckBox}/>
                    <LocalImageFedx
                  source={require('../assets/fedex.png')} 
                  originalWidth={5000}
                  originalHeight={2281}
                />
                <View style={styles.TextTitleHolder}>
                <Text style={styles.TitleText}>DHL</Text>
                <Text style={styles.Subtitle}>No Additional Costs</Text>
                </View>
                </View>
              

                <View style={styles.FooterTextsHolder}>

                <View style={styles.ShippingTitleHolder}>
                <Text style={styles.ShippingTitle}>
                Shipping Address
                </Text>
                <Icon name="ios-paper" size={30} color="#D2D2D2" />
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
   
    TextYourName: {
        fontSize: 15,
        color: "#BFBFBF"
    },

    ShippingHolder1: {
        flex: 1,
        backgroundColor: "pink",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    ShippingHolder2: {
        flex: 1,
        backgroundColor: "pink",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    ShippingHolder3: {
        flex: 1,
        backgroundColor: "white",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    CheckBox:{
        width:25,
        height:25,
        borderWidth: 1,
        borderColor:"black",
    },
    FooterTextsHolder:{
        flex:1.6,
        borderColor:"#E6E6E6",
        borderWidth:1
    },
    ButtonHolder: {
        flex: .5
    }
})
export default Shipping;
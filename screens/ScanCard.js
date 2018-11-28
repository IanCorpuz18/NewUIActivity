import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Alert, CheckBox } from 'react-native'
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

            <View style={styles.FirstView}>
           

             <View style={styles.ScanTextTitleHolder}>
             <Text style={styles.ScanTitleText}>
             Scan your card
             </Text>
             </View>
            <View style={styles.IconAndTextHolder}>
            <View style={styles.CameraIconHolder}>
            <Fa name="camera" size={25} color="#B5B5B5"/>
            </View>
            <View style={styles.CaptionTextHolder}>
            <Text style={styles.SaveTimeText}>
            Save time and scan your credit card
            </Text>
            </View>
            </View>
             </View>
            
            <View style={styles.SecondView}>
            
            <View style={styles.CreditCardHolder}>

            <View style={styles.CreditTitleTextHolder}>
            <Text style={styles.CreditTextTitle}>
            Credit Card #No
            </Text>
            </View>

            <View style={styles.TextInputVisaHolder}>

            <View style={styles.CreditCardInputHolder}>
            <TextInput style={styles.TextInputCreditCardNo}/>
            </View>

            <View style={styles.ImageVisaHolder}>
             <LocalImageVisa2
                  source={require('../assets/visa.png')} 
                  originalWidth={4060}
                  originalHeight={1648}
                />
            
            </View>

            </View>

            </View>

            </View>

            <View style={styles.ThirdView}>
            
        <View style={styles.ExpiresTextInputHolder}>
        <View style={styles.ExpiresTextHolder}>
        <Text style={styles.ExpiresText}>Expires</Text>
        </View>
        <View style={styles.ExpiresInputHolder}>
        <TextInput style={styles.ExpiresTextInput}/>
        </View>
        </View>

        <View style={styles.CVVTextInputHolder}>

        <View style={styles.CvvTextHolder}>
        <Text style={styles.CvvText}>CVV-Code</Text>
        </View>

        <View style={styles.MarkHolder}>
        <View style={styles.CvvInputHolder}>
        <TextInput style={styles.CvvTextInput}/>
        </View>
        <View style={styles.QuestionMarkHolder}>
        <Fa name="question-circle" size={35} color="#F38B4C"/>
        </View>
        </View>

        </View>

        </View>


            <View style={styles.FourthView}>
            
            <View style={styles.AgreeCheckBoxHolder}>
            
            <View style={styles.CheckBoxholder}>
            <CheckBox/>
            </View>
            <View style={styles.TextAgreeHolder}>
            <Text style={styles.AgreeText}>
            Agree to our terms & conditions</Text>
            </View>
            
            </View>
            <View style={styles.SpaceHolder}>
            <View style={styles.Space}>
            
            </View>

            <View style={styles.AgreementContentHolder}>
            <Text style={styles.AgreementContent}>
            I agree that i have read and accepted our
            </Text>
            <View style={styles.ColoredTextHolder}>
            <Text style={styles.ColoredText}>
            terms & conditions </Text>
            <Text style={styles.SimpleText}>
            for your purchase
            </Text>
            </View>
            </View>
            </View>
            </View>

            <View style={styles.ButtonHolder}>
            <CustomButton onPress={this.alertHolder}>
            Finish your Order
            </CustomButton>
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
    FirstView:{
        flex:1,
        backgroundColor:"white"
    },
    ScanTextTitleHolder:{
        flex:1,
        margin: 10,
    },
    ScanTitleText:{
        fontSize: 15,
        color: "#BFBFBF"
    },
    IconAndTextHolder:{
flex:4,
flexDirection: 'row',
justifyContent:"space-around",
alignItems:"center",
margin:10,
backgroundColor:"#F0F0F0"
    },
    CameraIconHolder:{
        flex:1,
        margin:1    
    },
    CaptionTextHolder:{
        flex:9,
        // margin:10,
    },
    SaveTimeText:{
        fontSize: 15,
        color: "black",
        fontWeight: 'bold',
    },
    SecondView:{
        flex:1,
        backgroundColor:"green"
    },
    CreditCardHolder:{
        flex:1,
        backgroundColor:"white"
    },
    CreditTitleTextHolder:{
        flex:1,
        // backgroundColor:"blue"
        margin:10
    },
    CreditTextTitle:{
        fontSize: 15,
        color: "#BFBFBF"
    },
    TextInputVisaHolder:{
        flex:5,
        flexDirection:'row'
    },
    CreditCardInputHolder:{
        flex:4,
        backgroundColor:"white",
        margin: 10,
    },
    TextInputCreditCardNo:{
        width:"100%",
        borderColor:"black",
        borderWidth: 1,
    },
    ImageVisaHolder:{
        flex:1,
        justifyContent:"center",
        alignItems: "flex-start",
    },

    ThirdView:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row"
    },
    ExpiresTextInputHolder:{
        flex:1
    },
    ExpiresTextHolder:{
        flex:1,
        margin: 10,
    },
    ExpiresText:{
        fontSize: 15,
        color: "#BFBFBF"
    },
    ExpiresInputHolder:{
        flex:3,
        margin:10,
        
    },
    ExpiresTextInput:{
        width:"100%",
        borderColor:"black",
        borderWidth:1
    },
    CVVTextInputHolder:{
        flex:1,
    },
    CvvTextHolder:{
        flex:1,
        margin:10
    },
    CvvText:{
        fontSize: 15,
        color: "#BFBFBF"
    },
    CvvInputHolder:{
        flex:2,
        // margin:10
        // margin:10,
    },
    CvvTextInput:{
        width:"100%",
        borderColor:"black",
        borderWidth:1
    },
    QuestionMarkHolder:{
        flex:2,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"
    },
    FourthView:{
        flex:2,
        backgroundColor:"white"
    },
    SpaceHolder:{
        flex:5,
        flexDirection:"row"
    },
    Space:{
        flex:1
    },
    MarkHolder:{
        flex:4,
        // paddingTop: 12,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // backgroundColor:"pink"
    },
    AgreeCheckBoxHolder:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: 'center',
    },
    CheckBoxholder:{
        flex:1,
        justifyContent:"center"
    },
    TextAgreeHolder:{
        flex:9
    },
    AgreeText:{
        fontSize: 15,
        color: "black",
        fontWeight: 'bold',
    },
    AgreementContentHolder:{
        flex:9,
        justifyContent:"flex-start",
        
    },
    AgreementContent:{
        fontSize: 15,
        color: "black",
    },
    ColoredTextHolder:{
        flex:1,
        flexDirection:"row"
    },
    ColoredText:{
        fontSize: 15,
        color: "#F38B4C",
    },
    SimpleText:{
        fontSize: 15,
        color: "black",
    },
    ButtonHolder:{
    flex:1,
    backgroundColor:"white",
    justifyContent:"flex-end"
    },
    
})
export default ScanCard;
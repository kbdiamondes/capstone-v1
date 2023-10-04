import {SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Pressable, Modal} from 'react-native';
import React, { useState } from 'react';
import CameraCapture from './Camera';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { CheckScreenNavigationprop } from '../../../App';
import { Picker } from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function PaymentForm(){
    const [itemName, setitemName] = useState('')
    const [itemPrice, setitemPrice] = useState(0)
    const [requiredCollectible, setrequiredCollectible] = useState(0)
    const [referenceNumber, setreferenceNumber] = useState(0)
    const [paymentType, setpaymentType] = useState('')
    const [transactionProof, settransactionProof] = useState<any>(null)

    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModal = () => setIsModalVisible(()=>!isModalVisible)

     //checks passed data from console
     const continueButton = () => {
        console.log(itemName);
        console.log(itemPrice);
        console.log(requiredCollectible);
        console.log(referenceNumber);
        console.log(paymentType);
        console.log(transactionProof);
        handleModal() //shows the modal
    }

    const confirmContract = () =>{
        alert("Success")
        handleModal() //hides the modal
        //pass value here
    }

    const navigation  = useNavigation<CheckScreenNavigationprop>();

    const handleSubmit = ()=>{axios.put('/user', {
      })
      .then(function (response) {
        console.log(response);
        handleModal()
      })
      .catch(function (error) {
        console.log(error);
      });}

      const clickSubmit = ()=>{axios.post('/user', {
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });}

      const Submit = ()=> {
        clickSubmit()
        handleSubmit()
    }
   
    return(
//modal
        


        <SafeAreaView>
            <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

                    <View style={styles.modalView}>

                        <Ionicons name="warning-sharp" color="grey" size={hp(12)}></Ionicons>
                        <Text style={{fontSize: hp(2.5)}}>Confirm Purchase?</Text>
                        <Text style={{fontSize: hp(1.2), fontWeight: '300', flexWrap: 'wrap', padding: hp(1.2)}}>Are you sure about this purchase?</Text>
                        <View style={styles.modalButtonConfirmation}>
                            <Pressable onPressIn={confirmContract}>
                                <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#fff'}}>Confirm</Text>
                            </Pressable>
                        </View>         
                    </View>
                </View>
            </Modal>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Pay Dues</Text>
                <Text style={styles.textSubHeader} >Easily pay your outstanding dues online with our convenient and secure payment platform.</Text>
                <View>
                    <Text style={styles.textLabel}>Item Name</Text>
                    <TextInput style={styles.textInput}  placeholder='Enter item name'></TextInput>
                    <Text style={styles.textLabel}>Item Price</Text>
                    <TextInput onChangeText={(e)=>setitemPrice(parseInt(e))} keyboardType={'numeric'} style={styles.textInput}  placeholder='Enter amount to be paid'></TextInput>
                    <Text style={styles.textLabel}>Required Collectible</Text>
                    <TextInput style={styles.textInput} editable={false} value='2500'></TextInput>
                    <Text style={styles.textLabel}>Reference Number</Text>
                    <TextInput style={styles.textInput} placeholder='Enter reference Number here'></TextInput>
                    <Text style={styles.textLabel}>Type of Payment</Text>

                    <Picker mode='dropdown'style={styles.d1} >
                            <Picker.Item label='Bank' value={'Bank'}/> 
                            <Picker.Item label='Cash' value={'Cash'}/> 
                            <Picker.Item label='Over the Counter' value={'Over the Counter'}/> 
                    </Picker>

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPressIn={()=>navigation.navigate('CameraShot')}>
                        <Text style={styles.buttonLabel}>
                            Take picture
                        </Text>
                        </Pressable>
                     
                    </View>
                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPressIn={handleSubmit}>
                        <Text style={styles.buttonLabel}>
                            Continue
                        </Text>
                        </Pressable>
                    </View>
                </View>
            </View>    
            </ScrollView>     
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container:{
        paddingTop: 120, 
        paddingHorizontal: 21
    }, 
    textHeader:{
        fontSize: 32,
        fontWeight: 'bold', 
        color: '#203949',
        paddingHorizontal: 15,
        
    },
    textSubHeader:{
        fontSize: 18,
        color: '#203949',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
    },
    textLabel:{
        paddingTop: 15,
        fontSize: 15,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    textInput:{
        fontSize: 17,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderColor: "#523009",
        borderWidth: .5,

    },
    buttonContainer: {
        padding: 5,
        height: 50,
        backgroundColor:'#2C85E7',
        marginLeft: 10,
        justifyContent:'space-evenly',
        borderRadius: 5,
        width: '50%',
        alignSelf:'center',
        margin: 7
    }, 
    button:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    buttonLabel:{
        color: '#fff', 
        fontSize: 12
    },
    d1:{
        height: 40,
        borderRadius: 5,
        width: '50%'
    },
    modalButtonConfirmation:{
        marginTop: hp(2), 
        backgroundColor: '#2C85E7',
        width: wp(35),
        height: hp(6.5),
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
    }, 
    modalView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: hp(5),
        backgroundColor: 'white',
        borderRadius: 20,
        padding: hp(5),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

});
    



/*
                    <View style={styles.buttonContainer}>

                    <Pressable onPress={()=>navigation.push('CameraCapture')}>
                        <Text style={styles.buttonLabel}>take picture</Text>
                    </Pressable>
                    </View>

*/

/*
                    <select
                      value={paymentType} onChange={(event) => setpaymentType(event.target.value)} defaultValue={'Select type of Payment'}
                      style={{ height: '35px', width: '120px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#D9D9D9' }}
                    >
                      <option value="Cash">Cash</option>
                      <option value="Online Banking">Online Banking</option>
                      <option value="Over the Counter">Over the Counter</option>
                    </select>
                    

*/
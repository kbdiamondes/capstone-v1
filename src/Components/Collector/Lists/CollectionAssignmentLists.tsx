import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

type CollectionAssignmentProps = {
    key:number, 
    personName:String; 
    itemCollectible: number; 
    transactionDate: String; 
}

export default function CollectionAssignment(props: CollectionAssignmentProps){
    const navigation = useNavigation<CheckScreenNavigationprop>();
    

    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636',fontSize: 14}}>{props.personName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: 12}}>{props.transactionDate}</Text>                                  
                    </View>
                <View style={styles.priceContainer}>
                <Pressable onPress={() => {
                        navigation.navigate("CollectPaymentForm");
    
                        }}
                        >
                        <Text style={styles.priceLabel}>Php {props.itemCollectible}</Text>
                        </Pressable>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        flex:1, 
        backgroundColor: '#F5F7F9',
        padding: 20, 
        borderRadius: 10, 
        marginBottom: 20,
        marginLeft: hp(1), 
        marginRight: hp(1), 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    },
    itemLeft:{
        flex:1, 
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    },
    square:{
        flex: .5, 
        width: 100,
        height: 50,
        margin: hp(1.5), 
        backgroundColor: '#92A0A8', 
        borderRadius: 5, 
    }, 
    itemText: {
        flex:1, 
        maxWidth: '80%', 
        marginRight: hp(1.5), 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        textAlign: 'left'
    }, 
    priceContainer: {
        flex: .8, 
        justifyContent: 'center'
    }, 
    priceLabel:{
        color: '#363636', 
        fontSize: 15,
        fontWeight: 'bold'
    },
}); 

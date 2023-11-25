import React, { useContext } from 'react'; 
import GetStarted from './src/Components/GetStarted';
import Login from './src/Components/Login';
import { DefaultTheme, NavigationContainer, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Register from './src/Components/Register';
import DuePayments from './src/Components/Client/DuePayments';
import { TabNavigator } from './src/Components/Client/ClientTabNavigator';
import { CollectorTabNavigator } from './src/Components/Collector/CollectorTabNavigator';
import TellMeAboutYourself from './src/Components/TellMe';
import { ResellerTabNavigator } from './src/Components/Reseller/ResellerTabNavigator';
import TestApp from './src/Services/TestAxios';
import AssignCollectorScreen from './src/Components/Reseller/AssignCollector';
import PaymentForm from './src/Components/Client/PaymentForm';
import CameraCapture from './src/Components/Client/Camera';

import {SafeAreaView, View,StyleSheet, Platform} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SplashScreen } from 'expo-router';

import ImagePreview from './src/Components/Client/ImagePreview';

import ActiveContracts from './src/Components/Reseller/ActiveContracts';
import CreateNewContract from './src/Components/Reseller/CreateNewContract';
import CreateNewContractScreen from './src/Components/Reseller/CreateNewContract';
import CreateNewContractModal from './src/Components/Reseller/CreateNewContract';
import FullPaymentScreen from './src/Components/Reseller/FullPaymentScreen';
import MonthlyPaymentmentScreen from './src/Components/Reseller/MonthlyInstallmentScreen';
import { AuthContext, AuthContextProvider } from './src/Context/AuthContext';
import CameraShot from './src/Components/Client/Camera';
import CollectPayments from './src/Components/Reseller/CollectPayments';
import ImagePreview2 from './src/Components/Client/ImagePreview2';
import DefaultDashboard from './src/Components/Client/ClientDashboard';
import CollectPaymentForm from './src/Components/Collector/CollectPaymentForm';
import CollectAllPaymentForm from './src/Components/Collector/CollectAllPaymentForm';
import ScheduleNewPaymentReminder from './src/Components/Client/ScheduleNewPaymentReminder';
import ClientDashboard from './src/Components/Client/ClientDashboard';
import { ClientDashboardTabNavigator } from './src/Components/Client/ClientDashboardTabNavigator';
import PaymentReminders from './src/Components/Client/PaymentReminders';
import ClientProfileModals from './src/Components/Client/Modals/ClientProfileModal';

import Toast from 'react-native-toast-message';
import ResellerDashboard from './src/Components/Reseller/ResellerDashboard';
import { ResellerDashboardTabNavigator } from './src/Components/Reseller/ResellerDashboardTabNavigator';
import ResellerProfileModals from './src/Components/Reseller/Modals/ResellerProfileModal';
import CollectorProfileModals from './src/Components/Collector/Modals/CollectorProfileModal';
import { CollectorDashboardTabNavigator } from './src/Components/Collector/CollectorDashboardTabNavigator';

import 'react-native-gesture-handler';
import 'expo-dev-client';

export type RootStackParamList = {
  Login: undefined;
  GetStarted: undefined;
  Register: undefined;

  //Client
  ClientProfileModal: undefined; 
  ClientDashboardTabNavigator: {screen: any};
  ClientDashboard: undefined; 
  DuePayments: undefined; 
  PaymentForm: {nameprop: any, paymentTransactionId:any,photo?:any, orderId: any, dueAmount: any};
  CameraShot: {nameprop: any, priceprop: any, paymentTransactionId:any}
  ImageScreenPreview: {imageprop: any, nameprop: any, priceprop: any, paymentTransactionId:any};
  TabNavigator: undefined; 
  ClientTabNavigator: undefined; 
  ScheduledPayments: undefined; 
  PaymentReminders: undefined; 
  TransactionHistory: undefined; 
  PaymentRecords: undefined; 
  ScheduleNewPaymentReminders: undefined; 
  
  
  
  
 

  //Collector
  CollectorProfileModal: undefined; 
  CollectorTabNavigator: {screen: any};
  CollectorDashboardTabNavigator: undefined; 
  CollectorDashboard: undefined; 
  Collect: undefined; 
  FollowUp: undefined;
  Assurance: undefined; 
  TellUsMoreAboutYourself: undefined; 
  CollectorCollectPaymentForm: {paymentTransactionId: any};
  CollectAllPaymentForm: undefined;

  //Reseller
  ResellerProfileModal: undefined; 
  ResellerTabNavigator: {screen: any}; 
  ResellerDashboardTabNavigator: undefined;
  ResellerDashboard: undefined; 
  CreateNewContractModal: undefined; 
  SoldItems: undefined; 
  MyCollector: undefined; 
  CollectPayments: {paymentTransactionId: Number,  dueAmount: any};
  ImageScreenPreview2: {imageprop: any};

  //assigned AssignCollector to receive data from SendCollector
  ActiveContractScreen: undefined; 
  FullPaymentContract: undefined; 
  MonthlyPaymentContract:undefined; 
  CollectorCollection: undefined; 
  
  //assigned AssignCollector Screen to receive data from Collector collection Screen
  AssignCollector: {otherParam1: any}; 
};

const Stack = createNativeStackNavigator<RootStackParamList>(); 

//used for typechecking upon navigating screens to see if Screen name is not void
export type CheckScreenNavigationprop = NativeStackNavigationProp<RootStackParamList>; 

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

/*
export default function App(){
  return(
    <DefaultDashboard/>
  );
}*/

export default function App(){

  const auth = useContext(AuthContext); 

  return(
    <AuthContextProvider>
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name="TellUsMoreAboutYourself" component={TellMeAboutYourself} options={{headerShown:false, gestureEnabled: false}}/>
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      
      <Stack.Screen name="ClientProfileModal" component={ClientProfileModals} options={{headerShown: false}}/>
      <Stack.Screen name="ClientTabNavigator" component={TabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="ClientDashboardTabNavigator" component={ClientDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="ClientDashboard" component={TabNavigator} options={{headerShown: false, headerBackButtonMenuEnabled: true}}/>
      <Stack.Screen name="DuePayments" component={ClientDashboardTabNavigator} options={{headerShown: false, headerBackButtonMenuEnabled: true}}/>
      <Stack.Screen name="ScheduledPayments" component={ClientDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="PaymentReminders" component={PaymentReminders} options={{headerShown: false}}/>
      <Stack.Screen name="TransactionHistory" component={ClientDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="PaymentRecords" component={ClientDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="ScheduleNewPaymentReminders" component={ScheduleNewPaymentReminder} options={{headerShown: false}}/>


      <Stack.Screen name="CollectorDashboard" component={CollectorDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="CollectorProfileModal" component={CollectorProfileModals} options={{headerShown: false}}/>
      <Stack.Screen name="CollectorTabNavigator" component={CollectorTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="CollectorDashboardTabNavigator" component={CollectorDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="Collect" component={CollectorDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="FollowUp" component={CollectorDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="Assurance" component={CollectorDashboardTabNavigator} options={{headerShown: false}}/>

      <Stack.Screen name="ResellerProfileModal" component={ResellerProfileModals} options={{headerShown: false}}/>
      <Stack.Screen name="ResellerTabNavigator" component={ResellerTabNavigator} options={{headerShown: false}}/> 
      <Stack.Screen name="ResellerDashboardTabNavigator" component={ResellerDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="ResellerDashboard" component={ResellerDashboardTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="ActiveContractScreen" component={ResellerTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="SoldItems" component={ResellerTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="CreateNewContractModal" component={CreateNewContractModal} options={{headerShown: false}}/>
      <Stack.Screen name="MyCollector" component={ResellerTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="CollectorCollection" component={ResellerTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="AssignCollector" component={AssignCollectorScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="FullPaymentContract" component={FullPaymentScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="MonthlyPaymentContract" component={MonthlyPaymentmentScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="PaymentForm" component={PaymentForm} options={{ headerShown: false}}/>
      <Stack.Screen name="CameraShot" component={CameraShot} options={{ headerShown: false}}/>
      
      <Stack.Screen name="ImageScreenPreview" component={ImagePreview} options={{ headerShown: false}}/>
      <Stack.Screen name="ImageScreenPreview2" component={ImagePreview2} options={{ headerShown: false}}/>
      <Stack.Screen name="CollectPayments" component={CollectPayments} options={{ headerShown: false}}/>
      <Stack.Screen name="CollectorCollectPaymentForm" component={CollectPaymentForm} options={{ headerShown: false}}/>
      <Stack.Screen name="CollectAllPaymentForm" component={CollectAllPaymentForm} options={{ headerShown: false}}/>

      
    </Stack.Navigator>

  </NavigationContainer>

  <Toast/>
  </AuthContextProvider>

  
  );
}

//Theme for the STACK
const MyTheme = {
  dark: false,
  colors: {
    flex:1,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(21,98,199)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
/*
<Stack.Screen name="DuePayments" component={TabNavigator} options={{headerShown: false, headerBackButtonMenuEnabled: true}}/>
<Stack.Screen name="CreateNewContract" component={CreateNewContract} options={{headerShown: false}}/> -> add to stack if planning to open modal through bottom nav
<Stack.Screen name="AssignCollector" component={AssignCollectorScreen} options={{headerShown: false}}/>
*/

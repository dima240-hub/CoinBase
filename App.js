import React, {useEffect} from 'react';
import {Image} from 'react-native';
import DashBoardFlow from './src/onBoardingScreens/DashBoardFlow';
import LoginScreen from './src/loginFlow/LoginScreen';
import SignupScreen from './src/loginFlow/SignupScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import ForgotPasswordScreen from './src/loginFlow/ForgotPasswordScreen';
import NewsLetterScreen from './src/loginFlow/NewsLetterScreen';
import NavigationBarScreen from './src/navigation/NavigationBarScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Mytabs from './src/bottomNav/Mytabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashBoardFlow" component={DashBoardFlow} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="NewsLetter" component={NewsLetterScreen} />
      <Stack.Screen name="NavigationBar" component={NavigationBarScreen} />
      <Stack.Screen name="MyTabs" component={Mytabs} />
    </Stack.Navigator>
  );
};
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <MainStackNavigator />
      {/* <Mytabs /> */}
    </NavigationContainer>
  );
};
export default App;

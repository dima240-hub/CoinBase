import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from '../dashboard/ChatScreen';
import TransactionScreen from '../dashboard/TransactionScreen';
import DashboardScreen from '../dashboard/DashboardScreen';
import SettingsScreen from '../dashboard/SetingsScreen';
import BitcoinScreen from '../dashboard/BitcoinScreen';
import styles from './MyTabs.style';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DashBoardCards = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashBoard" component={DashboardScreen} />
      <Stack.Screen name="Bitcoin" component={BitcoinScreen} />
    </Stack.Navigator>
  );
};

const Mytabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => {
          return null;
        },
        tabBarStyle: {backgroundColor: '#F8F8F8'},
      }}>
      <Tab.Screen
        name="DashBoardCards"
        component={DashBoardCards}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.imageContainerCards}>
                <Image
                  style={styles.image}
                  source={require('../../Images/activecards.png')}
                />
              </View>
            ) : (
              <View style={styles.imageContainerCards}>
                <Image
                  style={styles.image}
                  source={require('../../Images/allcards.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.imageContainerChatSettings}>
                <Image
                  style={styles.image}
                  source={require('../../Images/activechat.png')}
                />
              </View>
            ) : (
              <View style={styles.imageContainerChatSettings}>
                <Image
                  style={styles.image}
                  source={require('../../Images/chat.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.imageContainerTransactions}>
                <Image
                  style={styles.image}
                  source={require('../../Images/activetransactions.png')}
                />
              </View>
            ) : (
              <View style={styles.imageContainerTransactions}>
                <Image
                  style={styles.image}
                  source={require('../../Images/transactions.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.imageContainerChatSettings}>
                <Image
                  style={styles.image}
                  source={require('../../Images/activesettings.png')}
                />
              </View>
            ) : (
              <View style={styles.imageContainerChatSettings}>
                <Image
                  style={styles.image}
                  source={require('../../Images/settings.png')}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Mytabs;

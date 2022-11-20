import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BigTextForm from '../components/BigTextForm';
import styles from './NavigationBarScreen.componenet.style';
const NavigationBarScreen = ({navigation}) => {
  return (
    <View style={styles.fullcontainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../Images/Profilepic.png')}
          />
        </View>
        <View>
          <BigTextForm text="BosunJones" />
        </View>
        <View style={styles.fixFlexImg}>
          <View style={styles.imageContainer1}>
            <Image
              style={styles.image}
              source={require('../../Images/Vector.png')}
            />
          </View>
          <Text style={styles.text1}># 100,340.00</Text>
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
          <Text style={styles.dashboard}>DashBoard</Text>
        </TouchableOpacity>

        <Text style={styles.rest}>Profile</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('MyTabs', {screen: 'Chat'})}>
          <Text style={styles.rest}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MyTabs', {screen: 'Transaction'})
          }>
          <Text style={styles.rest}>Transaction History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MyTabs', {screen: 'Settings'})}>
          <Text style={styles.rest}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.imageContainer2}>
            <Image
              style={styles.image}
              source={require('../../Images/quit.png')}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default NavigationBarScreen;

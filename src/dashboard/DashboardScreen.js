import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

import styles from './DashboardScreen.component.style';
import BackButtonForm from '../components/BackButtonForm';
import CardForm from '../components/CardForm';
const DashboardScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <BackButtonForm
        navigateTo={() => navigation.navigate('NavigationBar')}
        imgsource={require('../../Images/Profilepic.png')}
      />
      <View style={{flex: 1}}>
        <View style={{marginLeft: 15, marginTop: 20}}>
          <LinearTextGradient
            style={{fontSize: 25}}
            locations={[0, 1]}
            colors={[`#ff1493`, `#8a2be2`]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text>Hi , Bosun Jones</Text>
          </LinearTextGradient>
          <Text style={styles.text1}>Welcome Back!</Text>
          <Text style={styles.text2}>
            Choose your prefered cord to continue
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Bitcoin')}>
          <CardForm />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default DashboardScreen;

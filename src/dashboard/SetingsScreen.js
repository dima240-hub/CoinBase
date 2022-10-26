import React from 'react';
import {Text, View} from 'react-native';
import HamburgerForm from '../components/HamburgerForm';

const SetingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HamburgerForm goTo={() => navigation.navigate('NavigationBar')} />
      <Text style={{color: 'red'}}>aa</Text>
    </View>
  );
};

export default SetingsScreen;

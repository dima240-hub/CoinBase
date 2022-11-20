import React from 'react';
import {Text, View} from 'react-native';
import HamburgerForm from '../components/HamburgerForm';

const SetingsScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <HamburgerForm goTo={() => navigation.navigate('NavigationBar')} />
    </View>
  );
};

export default SetingsScreen;

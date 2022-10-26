import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import styles from './FirstPage.componenet.style';
import BigTextForm from '../components/BigTextForm';
import LittleTextForm from '../components/LittleTextForm';
const FirstPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixScreen}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skip}>Skip{'>>'}</Text>
        </TouchableOpacity>

        <View style={styles.imagContainer}>
          <Image
            style={styles.image}
            source={require('../../Images/PrimaPoza.png')}
          />
        </View>

        <BigTextForm text={`Exchange Bitcoin ${'\n'}& Ethereum For Money`} />

        <LittleTextForm
          text={`Provide us with the necessary ${'\n'} required information and let us do ${'\n'}the convertion asap!!!`}
        />
      </View>
    </View>
  );
};
export default FirstPage;

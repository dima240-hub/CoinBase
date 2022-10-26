import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './BitcoinScreen.component.style';
import LittleTextForm from '../components/LittleTextForm';
import ButtonsForm from '../components/ButtonsForm';

import HamburgerForm from '../components/HamburgerForm';
/////////////////////

//SA FACI MARGINILE PE AICI PLUS COMPONENETA LA NAVIGATIA DE FATA

//////////////////

const BitcoinScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#e5e5e5'}}>
      <HamburgerForm goTo={() => navigation.navigate('NavigationBar')} />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>Bitcoin Currency</Text>

        <LinearGradient
          style={styles.rectangle}
          colors={['#E34141', `#FF8000`]}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}>
          <LinearGradient
            style={styles.cardContainer}
            colors={['#E34141', `#FF8000`]}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}>
            <Image
              style={styles.bitcoinImage}
              source={require('../../Images/bitcoinImage.png')}
            />
          </LinearGradient>
          <Image
            style={styles.bitcoinVectorImage}
            source={require('../../Images/bitcoinVector.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text1}>N440.00</Text>
            <Text style={styles.cardText}>
              {' '}
              is our conversion rate for every 0.1
            </Text>
          </View>
          <Text style={styles.cardText}>BTC on this platform</Text>
        </LinearGradient>

        <View style={{marginTop: 10}}>
          <LittleTextForm text='The total value you derived here will be the amount you"ll be receiving during the total transaction process' />
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>Bitcoin Value</Text>
        </View>
        <View style={styles.dotBorder}>
          <Text style={{color: 'black', fontSize: 20}}>N 00,000.00</Text>
        </View>

        <View style={{marginVertical: 30}}>
          <ButtonsForm text="Continue" />
        </View>
      </ScrollView>
    </View>
  );
};
export default BitcoinScreen;

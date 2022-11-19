import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './BitcoinScreen.component.style';
import LittleTextForm from '../components/LittleTextForm';
import ButtonsForm from '../components/ButtonsForm';
import HamburgerForm from '../components/HamburgerForm';
import CardForm from '../components/CardForm';

const BitcoinScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HamburgerForm goTo={() => navigation.navigate('NavigationBar')} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.text}>Bitcoin Currency</Text>

        <LinearGradient
          style={styles.rectangle}
          colors={['#E34141', `#FF8000`]}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}>
          <CardForm />
          <View style={styles.fixText}>
            <Text style={styles.text1}>N440.00</Text>
            <Text style={styles.cardText}>
              {' '}
              is our conversion rate for every 0.1
            </Text>
          </View>
          <Text style={styles.cardText1}>BTC on this platform</Text>
        </LinearGradient>

        <View style={styles.marginText}>
          <LittleTextForm text='The total value you derived here will be the amount you"ll be receiving during the total transaction process' />
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>Bitcoin Value</Text>
        </View>
        <View style={styles.dotBorder}>
          <Text style={styles.valueText1}>N 00,000.00</Text>
        </View>

        <View style={styles.buttonMargin}>
          <ButtonsForm text="Continue" />
        </View>
      </ScrollView>
    </View>
  );
};
export default BitcoinScreen;

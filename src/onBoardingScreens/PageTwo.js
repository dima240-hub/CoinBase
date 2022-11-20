import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import BigTextForm from '../components/BigTextForm';
import styles from './PageTwo.component.style';
import LittleTextForm from '../components/LittleTextForm';
const PageTwo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixScreen}>
        <TouchableOpacity
          style={styles.skipT}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skip}>Skip{'>>'}</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../Images/Poza2.png')}
          />
        </View>

        <BigTextForm
          text={`Got Giftcards you ${'\n'} want to redeem for${'\n'} cash?`}
        />

        <LittleTextForm
          text={`Unlimited type cards on our platform${'\n'}ranging from amazon, iTunes,Google ${'\n'}Play Store and e.t.c`}
        />
      </View>
    </View>
  );
};
export default PageTwo;

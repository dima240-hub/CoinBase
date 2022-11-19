import React from 'react';
import {View, Image} from 'react-native';
import styles from './CardForm.componenet.style';
import LinearGradient from 'react-native-linear-gradient';

const CardForm = () => {
  return (
    <LinearGradient
      style={styles.cardContainer}
      colors={['#E34141', `#FF8000`]}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}>
      <View style={styles.fixImages}>
        <View style={styles.fixVectorImage}>
          <Image
            style={styles.bitcoinVectorImage}
            source={require('../../Images/bitcoinVector.png')}
          />
        </View>
        <View style={styles.fixBitcoinImage}>
          <Image
            style={styles.bitcoinImage}
            source={require('../../Images/bitcoinImage.png')}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
export default CardForm;

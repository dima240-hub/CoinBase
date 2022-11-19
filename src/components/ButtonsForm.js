import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ButtonsForm.componenet.style';
const ButtonsForm = ({text}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.buttonContainer}
        locations={[0, 1]}
        colors={[`#ff1493`, `#8a2be2`]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </View>
  );
};
export default ButtonsForm;

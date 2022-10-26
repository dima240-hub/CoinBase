import React from 'react';
import {Text} from 'react-native-elements';
import {LinearTextGradient} from 'react-native-text-gradient';
import styles from './BigTextForm.componenet.style';
const BigTextForm = ({text}) => {
  return (
    <LinearTextGradient
      style={styles.text}
      locations={[0, 1]}
      colors={[`#ff1493`, `#8a2be2`]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <Text style={{fontWeight: 'bold'}}>{text}</Text>
    </LinearTextGradient>
  );
};
export default BigTextForm;

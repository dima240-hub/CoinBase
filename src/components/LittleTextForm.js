import React from 'react';
import {Text} from 'react-native-elements';
import styles from './LittleTextForm.componenent.style';
const LittleTextForm = ({text}) => {
  return <Text style={styles.littleText}>{text}</Text>;
};

export default LittleTextForm;

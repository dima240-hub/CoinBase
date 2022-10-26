import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './BackButtonForm.componenent.style';

import BigTextForm from './BigTextForm';
import {LinearTextGradient} from 'react-native-text-gradient';

const BackButtonForm = ({imgsource, imgstyle, navigateTo}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateTo}>
        <LinearTextGradient
          style={styles.backText}
          locations={[0, 1]}
          colors={[`#ff1493`, `#8a2be2`]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.7}}>
          <Text style={{fontWeight: 'bold'}}>{'< Back'}</Text>
        </LinearTextGradient>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imgsource} />
      </View>
    </View>
  );
};
export default BackButtonForm;

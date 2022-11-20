import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './BackButtonForm.componenent.style';
import {LinearTextGradient} from 'react-native-text-gradient';

const BackButtonForm = ({imgsource, navigateTo}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={navigateTo}>
          <LinearTextGradient
            style={styles.backText}
            locations={[0, 1]}
            colors={[`#ff1493`, `#8a2be2`]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.7}}>
            <Text style={styles.textWeight}>{'< Back'}</Text>
          </LinearTextGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imgsource} />
      </View>
    </View>
  );
};
export default BackButtonForm;

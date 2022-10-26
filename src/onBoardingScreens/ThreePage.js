import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import BigTextForm from '../components/BigTextForm';
import LinearGradient from 'react-native-linear-gradient';
import styles from './ThreePage.component.style';
import LittleTextForm from '../components/LittleTextForm';
import ButtonsForm from '../components/ButtonsForm';
const ThreePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixScreen}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('Login')}></TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../Images/Poza3.png')}
          />
        </View>

        <BigTextForm
          text={`You're One Step${'\n'} Closer to Cashing Out${'\n'} Your Exchange`}
        />

        <LittleTextForm
          text={`  Our pay out process is the one of the ${'\n'} fatest and guaranteed trusted`}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <ButtonsForm text="CONTINUE" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ThreePage;

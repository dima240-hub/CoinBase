import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './ForgotPasswordScreen.componenet.style';
import InputsForm from '../components/InputsForm';
import ButtonsForm from '../components/ButtonsForm';
import BigTextForm from '../components/BigTextForm';
import LittleTextForm from '../components/LittleTextForm';
import BackButtonForm from '../components/BackButtonForm';
const ForgotPasswordScreen = ({navigation}) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerstyle={styles.container}>
      <BackButtonForm navigateTo={() => navigation.navigate('Login')} />

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/forgot_password.png')}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <BigTextForm text={`Recover Password`} />
      </View>

      <InputsForm
        secure={false}
        placeholder={'Email'}
        imgstyle={styles.email}
        imgsource={require('../../Images/Email.png')}
      />

      <LittleTextForm
        text={`How well we communicate is${'\n'} determined not by how well we say${'\n'} things, but how well we are${'\n'} understood.`}
      />
      <View style={styles.scrollViewFix}>
        <ButtonsForm text="SUBMIT" />
      </View>
    </ScrollView>
  );
};
export default ForgotPasswordScreen;

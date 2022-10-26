import React, {useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './SignupScreen.component.style';
import InputsForm from '../components/InputsForm';
import ButtonsForm from '../components/ButtonsForm';
import {BarPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import LittleTextForm from '../components/LittleTextForm';
import BackButtonForm from '../components/BackButtonForm';
const SignupScreen = ({navigation}) => {
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
      <BackButtonForm navigateTo={() => navigation.navigate('Login')} />

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/Profile.png')}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <LittleTextForm
          text={`  Innovation distinguishes between a leader and a ${'\n'}follower`}
        />
      </View>

      <InputsForm
        secure={false}
        placeholder={'Full Name'}
        imgstyle={styles.email}
        imgsource={require('../../Images/name.png')}
      />
      <InputsForm
        secure={false}
        placeholder={'Email'}
        imgstyle={styles.email}
        imgsource={require('../../Images/Email.png')}
      />
      <InputsForm
        secure={true}
        placeholder={'Password'}
        value={password}
        change={text => {
          setPassword(text);
        }}
        imgstyle={styles.pass}
        imgsource={require('../../Images/Pass.png')}
      />
      <InputsForm
        secure={true}
        placeholder={'ConfirmPassword'}
        imgstyle={styles.pass}
        imgsource={require('../../Images/Pass.png')}
      />
      <View style={{marginTop: 20}}>
        {password && <BarPasswordStrengthDisplay password={password} />}
      </View>

      <ButtonsForm text="SIGNUP" />

      <Text style={styles.text}>or</Text>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <LittleTextForm text="Signup with a social account" />
        <View style={styles.socialContainer}>
          <Image
            style={styles.socialImage}
            source={require('../../Images/facebook.png')}
          />
          <Image
            style={styles.socialImage}
            source={require('../../Images/twitter.png')}
          />
          <Image
            style={styles.socialImage}
            source={require('../../Images/google.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default SignupScreen;

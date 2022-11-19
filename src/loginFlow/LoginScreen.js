import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './LoginScreen.componenet.style';
import InputsForm from '../components/InputsForm';
import ButtonsForm from '../components/ButtonsForm';
import LittleTextForm from '../components/LittleTextForm';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/Profile.png')}
        />
      </View>
      <LittleTextForm
        text={`Great things are not done by impulse, but a${'\n'}series of small things brought together`}
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
        imgstyle={styles.pass}
        imgsource={require('../../Images/Pass.png')}
      />

      <TouchableOpacity
        style={styles.littleTextPosition}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <LittleTextForm text="Forgot Your Password ?" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logginButtonFix}
        onPress={() => {
          navigation.navigate('NavigationBar');
          setTimeout(() => {
            navigation.navigate('NewsLetter');
          }, 2000);
        }}>
        <ButtonsForm text="LOGIN" />
      </TouchableOpacity>

      <View style={styles.socialAlign}>
        <LittleTextForm text="Login with a social account" />
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
      <View style={styles.signupFix}>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate('Signup')}>
          <LinearGradient
            style={styles.button2Container}
            locations={[0, 1]}
            colors={[`#ff1493`, `#8a2be2`]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <View style={styles.firstTextButton}>
              <Text style={styles.button2Text1}>
                Do not have an acccount ?{' '}
              </Text>
              <Text style={styles.button2Text2}>Create Account</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;

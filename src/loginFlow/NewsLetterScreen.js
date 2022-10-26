import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import BigTextForm from '../components/BigTextForm';
import InputsForm from '../components/InputsForm';
import ButtonsForm from '../components/ButtonsForm';
import styles from './NewsLetter.component.style';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import LittleTextForm from '../components/LittleTextForm';
import BackButtonForm from '../components/BackButtonForm';
const NewsLetterScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#e5e5e5'}}
      contentContainerstyle={styles.container}>
      <BackButtonForm navigateTo={() => navigation.navigate('NavigationBar')} />

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/newsletter.png')}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <BigTextForm
          text={`Subscribe to our${'\n'} newsletter to receive${'\n'} weekly updates`}
        />
      </View>
      <InputsForm
        secure={false}
        placeholder={'Email'}
        imgstyle={styles.email}
        imgsource={require('../../Images/Email.png')}
      />
      <LittleTextForm
        text={`We hate spam just as much as you do ${'\n'}and will not spam your email.`}
      />
      <View style={{marginBottom: 30}}>
        <ButtonsForm text="SUBSCRIBE" />
      </View>
    </ScrollView>
  );
};
export default NewsLetterScreen;

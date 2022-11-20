import React from 'react';
import {Text, View} from 'react-native';
import HamburgerForm from '../components/HamburgerForm';
import styles from './ChatScreen.component.style';
import ChatForm from '../components/ChatForm';

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HamburgerForm goTo={() => navigation.navigate('NavigationBar')} />
      <View>
        <Text style={styles.chatstext}>Chats</Text>
      </View>
      <View style={styles.chatsFix}>
        <ChatForm />
      </View>
    </View>
  );
};

export default ChatScreen;

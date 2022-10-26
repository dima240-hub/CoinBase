import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './HamburgerForm.component.style';
const HamburgerForm = ({goTo}) => {
  return (
    <View style={styles.topcontainer}>
      <TouchableOpacity onPress={goTo}>
        <View style={styles.hamburgerContainer}>
          <Image
            style={styles.image}
            source={require('../../Images/hamburger.png')}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          style={styles.image}
          source={require('../../Images/Profilepic.png')}
        />
      </View>
    </View>
  );
};
export default HamburgerForm;

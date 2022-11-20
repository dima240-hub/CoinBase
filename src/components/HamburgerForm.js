import React from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './HamburgerForm.component.style';
const HamburgerForm = ({goTo}) => {
  return (
    <View style={styles.topcontainer}>
      <View style={styles.hamburgerContainer}>
        <TouchableOpacity onPress={goTo}>
          <Image
            style={styles.hamburgerImage}
            source={require('../../Images/hamburger.png')}
          />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.profileImage}
        source={require('../../Images/Profilepic.png')}
      />
    </View>
  );
};
export default HamburgerForm;

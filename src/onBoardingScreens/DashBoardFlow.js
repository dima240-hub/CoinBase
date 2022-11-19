import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FirstPage from './FirstPage';
import PageTwo from './PageTwo';
import ThreePage from './ThreePage';
import Swiper from 'react-native-swiper';
import styles from './DashBoardFlow.component.style';
const DashBoardFlow = ({navigation}) => {
  return (
    <Swiper
      loop={false}
      index={0}
      removeClippedSubviews={false}
      activeDot={
        <View style={styles.marginDots}>
          <LinearGradient
            colors={[`#ff1493`, `#8a2be2`]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.borderDots}>
            <View style={styles.activeDot} />
          </LinearGradient>
        </View>
      }
      dot={
        <View style={styles.marginDots}>
          <LinearGradient
            colors={[`#ff1493`, `#8a2be2`]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.dot}
          />
        </View>
      }>
      <FirstPage navigation={navigation} />
      <PageTwo navigation={navigation} />
      <ThreePage navigation={navigation} />
    </Swiper>
  );
};
export default DashBoardFlow;

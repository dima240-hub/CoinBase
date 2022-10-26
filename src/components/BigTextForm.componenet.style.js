import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
  },
});

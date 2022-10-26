import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  littleText: {
    fontSize: 13,
    color: 'grey',
    padding: 10,
    textAlign: 'center',
  },
});

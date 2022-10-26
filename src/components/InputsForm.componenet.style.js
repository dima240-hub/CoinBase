import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
console.log(windowHeight + 'h');
console.log(windowWidth + 'w');
export default StyleSheet.create({
  inputContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: windowWidth * 0.9,
    height: windowHeight * 0.08,
    
  },
});

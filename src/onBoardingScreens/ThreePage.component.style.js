import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixScreen: {
    bottom: windowHeight * 0.05,
  },

  imageContainer: {height: windowHeight / 3, aspectRatio: 1 * 1.3},
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
});

import {StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  email: {
    width: windowWidth * 0.08,
    height: windowHeight * 0.04,
    marginRight: windowWidth * 0.04,
  },
  imageContainer: {
    width: windowWidth * 0.36,
    height: windowHeight * 0.25,
    aspectRatio: 1 * 1.4,
    marginTop: windowHeight * 0.07,
    alignSelf: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixScreen: {
    bottom: 30,
  },

  imageContainer: {height: 230, aspectRatio: 1 * 1.3},
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
});

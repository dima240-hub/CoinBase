import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  skip: {
    fontSize: 20,
    color: 'grey',
  },
  skipT: {
    alignSelf: 'flex-end',
    bottom: 50,
  },
  imagContainer: {height: 230, aspectRatio: 1 * 1.3},
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
});

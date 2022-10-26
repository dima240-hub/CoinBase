import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  imageContainer: {
    height: windowHeight / 5,
    aspectRatio: 1 * 1,
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
  imageContainer1: {
    height: windowHeight * 0.03,
    aspectRatio: 1 * 1,
    marginRight: windowWidth * 0.02,
  },
  text1: {
    color: 'black',
    fontSize: 15,
  },
  dashboard: {
    color: 'rgba(138, 43, 226 , 0.7)',
    marginBottom: windowHeight * 0.03,
    marginTop: windowHeight * 0.05,
    fontSize: 15,
  },
  rest: {
    color: 'black',
    marginBottom: windowHeight * 0.03,
    fontSize: 15,
  },

  imageContainer2: {
    height: windowHeight * 0.05,
    aspectRatio: 1 * 0.9,
    marginTop: windowHeight * 0.05,
    marginBottom: windowHeight * 0.05,
  },
});

import {StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },

  imageContainer: {
    height: windowHeight / 7,
    aspectRatio: 1 * 1,
    marginTop: windowHeight * 0.02,
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},

  email: {
    width: windowWidth * 0.08,
    height: windowHeight * 0.04,
    marginRight: windowWidth * 0.04,
  },
  pass: {
    width: windowWidth * 0.072,
    height: windowHeight * 0.05,
    marginRight: windowWidth * 0.04,
  },
  littleTextPosition: {
    bottom: windowHeight * 0.04,
  },
  socialAlign: {marginTop: windowHeight * 0.07, alignItems: 'center'},
  socialContainer: {flexDirection: 'row', alignItems: 'center'},
  socialImage: {
    width: windowWidth * 0.12,
    height: windowHeight * 0.06,
    marginRight: 5,
  },

  button2Container: {
    width: windowWidth,
    height: windowHeight * 0.07,
    justifyContent: 'center',
  },
  button2Text1: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  button2Text2: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

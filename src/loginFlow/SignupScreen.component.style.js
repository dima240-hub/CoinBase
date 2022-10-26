import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },

  imageContainer: {
    height: windowHeight / 7,
    aspectRatio: 1 * 1,
    marginTop: windowHeight * 0.04,
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

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    marginVertical: 20,
  },
  socialAlign: {marginTop: windowHeight * 0.07},
  socialContainer: {flexDirection: 'row', alignItems: 'center'},
  socialImage: {
    width: windowWidth * 0.12,
    height: windowHeight * 0.06,
    marginRight: 5,
  },
});

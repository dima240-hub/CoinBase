import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },

  text1: {
    fontSize: 25,
    color: '#8a2be2',
    textAlign: 'center',
    left: 10,
  },

  text1: {
    color: 'black',
    fontSize: 17,
    marginTop: 15,
  },
  text2: {
    color: 'black',
    fontSize: 13,
    marginTop: 3,
    marginBottom: 30,
  },
  cardContainer: {
    borderRadius: 15,
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bitcoinImage: {
    aspectRatio: 1 * 3.3,
  },
  bitcoinVectorImage: {
    width: windowWidth * 0.06,
    height: windowHeight * 0.03,
    left: windowWidth * 0.85,
    bottom: windowHeight * 0.28,
  },
});

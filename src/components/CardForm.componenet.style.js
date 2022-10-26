import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
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

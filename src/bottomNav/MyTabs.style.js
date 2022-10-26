import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  imageContainerChatSettings: {
    height: windowHeight * 0.03,
    aspectRatio: 1 * 1.1,
  },
  imageContainerCards: {
    height: windowHeight * 0.03,
    aspectRatio: 1 * 0.8,
  },
  imageContainerTransactions: {
    height: windowHeight * 0.03,
    aspectRatio: 1 * 1.35,
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
});

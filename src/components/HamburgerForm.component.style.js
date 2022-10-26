import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  topcontainer: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerContainer: {
    height: windowHeight * 0.04,
    aspectRatio: 1 * 1,
    left: windowWidth * 0.05,
  },
  profileContainer: {
    height: windowHeight * 0.07,
    aspectRatio: 1 * 1,
    flexDirection: 'column',
    left: windowWidth * 0.75,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

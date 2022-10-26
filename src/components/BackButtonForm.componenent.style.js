import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 20,
    color: '#8a2be2',
    fontWeight: 'bold',

    marginLeft: windowHeight * 0.02,
  },
  imageContainer: {
    height: windowHeight * 0.06,
    aspectRatio: 1 * 1.2,
    marginLeft: windowWidth * 0.6,
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
});

import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: windowWidth * 0.4,
  },
  swipeContainer: {
    borderBottomWidth: 1,
    width: windowWidth,
    height: windowHeight * 0.13,
    borderBottomColor: 'rgba(128,128,128,0.3)',
  },
  imageContainer: {
    height: windowHeight * 0.042,
    aspectRatio: 1 * 1,
    right: windowWidth * 0.04,
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
  profile: {
    height: windowHeight * 0.06,
    aspectRatio: 1 * 1,
    top: windowHeight * 0.025,
  },
  name: {
    color: 'black',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: windowWidth * 0.01,
    marginTop: 5,
  },
  fixNameText: {
    flexDirection: 'column',
    marginLeft: windowWidth * 0.02,
    marginTop: windowHeight * 0.015,
  },
  messageView: {
    width: windowWidth * 0.8,
  },
  text: {color: 'grey', fontSize: 15, marginLeft: windowWidth * 0.01},
});

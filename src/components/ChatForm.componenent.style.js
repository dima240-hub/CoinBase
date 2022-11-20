import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '30%',
  },
  swipeContainer: {
    borderBottomWidth: 1,
    width: '100%',
    height: 90,
    borderBottomColor: 'rgba(128,128,128,0.3)',
  },
  imageContainer: {
    height: 35,
    aspectRatio: 1 * 1,
    right: 15,
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
  profile: {
    height: 40,
    aspectRatio: 1 * 1,
    top: 15,
  },
  name: {
    color: 'black',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: 5,
    marginTop: 5,
  },
  fixNameText: {
    flexDirection: 'column',
    marginLeft: 7,
    marginTop: 5,
  },
  messageView: {
    width: '90%',
  },
  fixChats: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  text: {color: 'grey', fontSize: 15, marginLeft: 7},
});

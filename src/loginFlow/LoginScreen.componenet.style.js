import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },

  imageContainer: {
    height: 120,
    aspectRatio: 1 * 1,
    marginTop: 15,
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},

  email: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  pass: {
    width: 25,
    height: 30,
    marginRight: 10,
  },
  littleTextPosition: {
    bottom: 20,
  },
  socialAlign: {alignItems: 'center', bottom: 30},
  socialContainer: {flexDirection: 'row', alignItems: 'center'},
  socialImage: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  signupFix: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  logginButtonFix: {
    bottom: 30,
  },
  button2Container: {
    justifyContent: 'center',
  },

  button2Text1: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  firstTextButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 50,
    alignItems: 'center',
  },
  button2Text2: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

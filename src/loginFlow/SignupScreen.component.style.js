import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },

  imageContainer: {
    height: 100,
    aspectRatio: 1 * 1,
    marginTop: 25,
  },
  textMargin: {
    marginBottom: 20,
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
  marginPass: {
    marginTop: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    marginVertical: 20,
  },

  socialContainer: {flexDirection: 'row', alignItems: 'center'},
  socialFix: {
    alignItems: 'center',
    marginBottom: 30,
  },
  socialImage: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
});

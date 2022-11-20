import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  email: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  imageContainer: {
    width: 120,
    height: 170,
    aspectRatio: 1 * 1.4,
    marginTop: 50,
    alignSelf: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  scrollViewFix: {
    paddingBottom: 20,
  },
});

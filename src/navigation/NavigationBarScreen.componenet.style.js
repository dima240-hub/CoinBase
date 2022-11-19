import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  fullcontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  imageContainer: {
    height: 120,
    aspectRatio: 1 * 1,
  },
  fixFlexImg: {
    flexDirection: 'row',
  },
  image: {resizeMode: 'cover', width: '100%', height: '100%'},
  imageContainer1: {
    height: 20,
    aspectRatio: 1 * 1,
    marginRight: 5,
  },
  text1: {
    color: 'black',
    fontSize: 15,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard: {
    color: 'rgba(138, 43, 226 , 0.7)',
    marginBottom: 20,
    marginTop: 30,
    fontSize: 15,
  },
  rest: {
    color: 'black',
    marginBottom: 20,
    fontSize: 15,
  },

  imageContainer2: {
    height: 40,
    aspectRatio: 1 * 0.9,
    marginTop: 30,
    marginBottom: 30,
  },
});

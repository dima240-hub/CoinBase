import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 20,
    color: '#8a2be2',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  imageContainer: {
    aspectRatio: 1 * 1.2,
  },
  textWeight: {
    fontWeight: 'bold',
  },
  image: {resizeMode: 'cover', width: 50, height: 50, right: 10, bottom: 4},
});

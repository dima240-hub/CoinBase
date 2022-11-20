import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  cardContainer: {
    flex: 0.8,
    borderRadius: 15,
    width: '90%',
    height: 170,
    alignSelf: 'center',
    shadowColor: 'black',
    elevation: 60,
  },
  fixImages: {
    flex: 1,
    flexDirection: 'column',
  },
  fixVectorImage: {
    flexDirection: 'column',
    flex: 0.5,
    alignSelf: 'flex-end',
    right: 10,
    top: 10,
  },
  fixBitcoinImage: {
    alignSelf: 'center',
  },
  bitcoinImage: {
    aspectRatio: 1 * 3.3,
  },
  bitcoinVectorImage: {
    width: 20,
    height: 20,
  },
});

import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  text: {
    color: 'grey',
    left: windowWidth * 0.055,
    marginBottom: windowHeight * 0.04,
    alignSelf: 'flex-start',
    marginTop: windowHeight * 0.03,
  },
  rectangle: {
    borderWidth: 1,

    width: windowWidth,
    height: windowHeight * 0.42,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderColor: 'white',
  },

  cardContainer: {
    borderRadius: 15,
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',

    elevation: 60,
  },

  bitcoinImage: {
    aspectRatio: 1 * 3.3,
  },
  bitcoinVectorImage: {
    width: windowWidth * 0.06,
    height: windowHeight * 0.03,
    left: windowWidth * 0.85,
    bottom: windowHeight * 0.28,
  },
  text1: {textAlign: 'center', color: 'white', fontWeight: 'bold'},
  cardText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '200',
  },
  valueContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: windowWidth * 0.83,
    height: windowHeight * 0.085,
    justifyContent: 'center',
    borderColor: 'grey',
    marginTop: 20,
  },
  valueText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    left: windowWidth * 0.055,
  },
  dotBorder: {
    borderWidth: 2,
    height: windowHeight * 0.11,
    width: windowWidth * 0.6,
    borderStyle: 'dashed',
    borderColor: '#ff1493',
    marginTop: windowHeight * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

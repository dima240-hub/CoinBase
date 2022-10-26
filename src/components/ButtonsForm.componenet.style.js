import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    width: windowWidth * 0.55,
    height: windowHeight * 0.07,
    alignSelf: 'center',
    marginTop: windowHeight * 0.04,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

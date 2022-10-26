import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  chatstext: {
    left: windowWidth * 0.05,
    fontSize: 20,
    color: 'grey',
    top: windowHeight * 0.05,
  },
  chatsFix: {flex: 1, marginTop: 50},
});

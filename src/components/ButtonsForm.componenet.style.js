import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

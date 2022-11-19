import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    left: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  rectangle: {
    flexDirection: 'column',
    borderWidth: 1,
    width: '100%',
    height: 280,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderColor: 'white',
  },

  fixText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  text1: {textAlign: 'center', color: 'white', fontWeight: 'bold'},
  cardText1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '200',
    top: 20,
  },
  cardText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '200',
  },
  marginText: {
    marginTop: 10,
  },
  valueText1: {color: 'black', fontSize: 20},
  buttonMargin: {
    marginVertical: 30,
  },
  valueContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: '83%',
    height: 60,
    justifyContent: 'center',
    borderColor: 'grey',
    marginTop: 20,
  },
  valueText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    left: 20,
  },
  dotBorder: {
    borderWidth: 2,
    height: 70,
    width: '60%',
    borderStyle: 'dashed',
    borderColor: '#ff1493',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

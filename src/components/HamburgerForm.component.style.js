import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  topcontainer: {
    width: '100%',
    height: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerContainer: {
    flex: 1,
  },
  hamburgerImage: {
    resizeMode: 'cover',
    width: 30,
    height: 30,
    left: 10,
  },
  profileImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    right: 10,
  },
});

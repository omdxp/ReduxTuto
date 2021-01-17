import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 50,
  },
  textTouchable: {
    fontSize: 50,
    padding: 10,
    color: 'white',
  },
  buttonGreen: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#4fd323',
    borderRadius: 27,
  },
  buttonRed: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ff4323',
    borderRadius: 27,
  },
  vSpace: {
    marginVertical: 10,
  },
  hSpace: {
    marginHorizontal: 10,
  },
});

import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
  },
  buttonIncrement: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 27,
    width: '100%',
  },
  buttonDecrement: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 27,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
  },
});

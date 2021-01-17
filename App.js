import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {appStyles} from './app/styles';

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <View style={appStyles.container}>
      <TouchableOpacity style={appStyles.buttonGreen} onPress={increment}>
        <Text style={appStyles.textTouchable}>Increment</Text>
      </TouchableOpacity>

      <View style={appStyles.vSpace} />
      <Text style={appStyles.text}>{counter}</Text>
      <View style={appStyles.vSpace} />

      <TouchableOpacity style={appStyles.buttonRed} onPress={decrement}>
        <Text style={appStyles.textTouchable}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

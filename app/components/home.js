import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {homeStyles} from '../styles';

export default function Home() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  };

  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity
        style={homeStyles.buttonIncrement}
        onPress={incrementHandler}>
        <Text style={homeStyles.buttonText}>Increment</Text>
      </TouchableOpacity>

      <View style={{marginVertical: 10}} />
      <Text style={homeStyles.title}>The counter is {counter}.</Text>
      <View style={{marginVertical: 10}} />

      <TouchableOpacity
        style={homeStyles.buttonDecrement}
        onPress={decrementHandler}>
        <Text style={homeStyles.buttonText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

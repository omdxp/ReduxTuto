import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function ListView() {
  const listItems = useSelector((state) => state.itemList);
  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      {listItems.length !== 0 ? (
        <Text>Contains List items</Text>
      ) : (
        <Text style={{fontSize: 30}}>Your list is empty</Text>
      )}
    </View>
  );
}

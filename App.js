import React from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import counterStore from './CounterStore';

const App = observer(() => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {counterStore.count}</Text>
      <Button title="Increment" onPress={counterStore.increment} />
      <Button title="Decrement" onPress={counterStore.decrement} />
    </View>
  );
});

export default App;

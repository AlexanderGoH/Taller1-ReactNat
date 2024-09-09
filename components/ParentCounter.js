import React, { useState } from 'react';
import { View } from 'react-native';
import ChildCounter from './ChildCounter';

const ParentCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <ChildCounter count={count} increment={increment} decrement={decrement} />
    </View>
  );
};

export default ParentCounter;
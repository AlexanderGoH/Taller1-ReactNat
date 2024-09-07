import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return(
    <View style={{marginBottom: 20 }}>
      <Button title="Presioname!" onPress={handleClick} />
      <Text>Clicks: {clickCount}</Text>
    </View>
  );
};

export default ClickCounter;
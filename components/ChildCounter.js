import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const ChildCounter = (props) => {
  return (
    <View style={styles.container}>
      <Button title="-" onPress={props.decrement} />
      <Text style={styles.text}>{props.count}</Text>
      <Button title="+" onPress={props.increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 20,
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    flexGrow: 1,
  },
});

export default ChildCounter;
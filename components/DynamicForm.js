import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

const DynamicForm = () => {
  const [input, setInput] = useState('');
  const [subbmitted, setSubmitted] = useState([]);

  const handleSubmit = () => {
    setSubmitted([...subbmitted, input]);
    setInput('');
  };

  return (
    <View style={{marginBottom: 20}}>
      <TextInput
        placeholder="Escribe algo"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Agregar Texto" onPress={handleSubmit} />
      {subbmitted.map((text, index) => (
        <Text key={index}>{text}</Text>
      ))}
    </View>
  );
};

export default DynamicForm;
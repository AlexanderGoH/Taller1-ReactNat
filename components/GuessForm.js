import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';

const GuessForm = ({correctAnswer, onCheckAnswer}) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = () => {
    onCheckAnswer(guess);
    setGuess('');
  };

  return (
    <View>
      <TextInput
        value={guess}
        onChangeText={setGuess}
        placeholder="Escribe tu respuesta"
      />
      <Button
        title="Verificar"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default GuessForm;
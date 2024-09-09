import React, {useState} from 'react';
import { View, Text } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
  const [correctAnswer] = useState('Mapa')
  const [result, setResult] = useState('');

  const checkAnswer = (guess) => {
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setResult('Correcto');
    } else {
      setResult('Incorrecto. Intenta de nuevo :)');
    }
  };

  return (
    <View>
      <Text>Tengo ciudades, pero no casas. Tengo montañas, pero no árboles. Tengo agua, pero no peces. ¿Qué soy?</Text>
      <GuessForm correctAnswer={correctAnswer} onCheckAnswer={checkAnswer} />
      {result ? <Text>{result}</Text> : null}
    </View>
  );
};

export default Game;
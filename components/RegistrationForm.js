import React, {useState} from "react";
import { View, TextInput, Button } from "react-native";

const RegistrationForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({name, email, password});
    setName('');
    setEmail('');
    setPassword('');
  };

  return(
    <View style={{marginBottom: 10}}>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Registrarse"
        onPress={handleSubmit}
      />
    </View>
  );

};

export default RegistrationForm;
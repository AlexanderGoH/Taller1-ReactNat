import React from "react";
import { View, Button, Alert } from "react-native";

const AlertButton = ({message}) => {
  const showAlert = () => {
    Alert.alert("Alerta", message);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Button title="Mostrar alerta" onPress={showAlert} />
    </View>
  );
};

export default AlertButton;
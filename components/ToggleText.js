import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Button title={isVisible ? "Ocultar texto" : "Mostrar texto"} onPress={toggleVisibility} />
      {isVisible && <Text>¡Este es el texto que se puede mostrar u ocultar!</Text>}
    </View>
  );
};

export default ToggleText;
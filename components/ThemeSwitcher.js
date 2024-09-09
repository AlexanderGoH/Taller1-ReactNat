import React, {useState} from "react";
import { View, Button } from "react-native";

const ThemeSwitcher = ({onThemeChange}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Button title={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"} onPress={toggleTheme} />
    </View>
  );
};

export default ThemeSwitcher;
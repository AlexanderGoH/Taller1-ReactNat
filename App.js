import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// Parte 1
import Greetings from './components/Greetings';
import UserDetails from './components/UserDetails';
import Task from './components/Task';

// Parte 2
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';

// Parte 3
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';

// Parte 4
import ParentCounter from './components/ParentCounter';
import ImageGallery from './components/ImageGallery';
import Game from './components/Game';

export default function App() {

  const [RegistrationData, setRegistrationData] = useState(null);
  const handleRegistration = (data) => {
    setRegistrationData(data);
  };

  const [isDark, setIsDark] = useState(false);
  const handleThemeChange = (newTheme) => {
    setIsDark(newTheme);
  }
  const appStyles = isDark ? styles.darkContainer : styles.lightContainer;

  return (
    <View style={[styles.container, appStyles]}>
      {/* Ejercicio 1.1*/}
      {/* <View style={{ marginBottom: 20 }}>
        <Greetings name="Alexander" />
      </View> */}

      {/* Ejercicio 1.2*/}
      {/* <View style={{ marginBottom: 20 }}>
        <UserDetails name="Alexander" age="19" ocupation="Estudiante" />
      </View> */}

      {/* Ejercicio 1.3*/}
      {/* <View style={{ marginBottom: 20 }}>
        <Task task={{ title: "Tarea 1", completed: true }} />
        <Task task={{ title: "Tarea 2", completed: false }} />
      </View> */}

      {/* Ejercicio 2.1*/}
      {/* <ToggleText /> */}

      {/* Ejercicio 2.2*/}
      {/* <DynamicForm /> */}

      {/* Ejercicio 2.3*/}
      {/* <ClickCounter /> */}

      {/* Ejercicio 3.1*/}  
      {/* <RegistrationForm onSubmit={handleRegistration} />
      {RegistrationData && (
        <View style={{marginBottom: 20}}>
          <Text>Nombre: {RegistrationData.name}</Text>
          <Text>Correo: {RegistrationData.email}</Text>
          <Text>Contraseña: {RegistrationData.password}</Text>
        </View>
      )} */}

      {/* Ejercicio 3.2*/}
      {/* <ThemeSwitcher onThemeChange={handleThemeChange} /> */}

      {/* Ejercicio 3.3*/}
      {/* <AlertButton message="Albion Online es un MMORPG no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, explora un amplio mundo abierto con 5 biomas únicos, todo cuanto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albion, los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quien eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases, aventúrate en el mundo abierto frente a los habitantes y las criaturas de Albion, inicia expediciones o adéntrate en mazmorras en las que encontrarás enemigos aún más difíciles, enfréntate a otros jugadores en encuentros en el mundo abierto, lucha por los territorios o por ciudades enteras en batallas tácticas, relájate en tu isla privada, donde podrás construir un hogar, cultivar cosechas y criar animales, únete a un gremio, todo es mejor cuando se trabaja en grupo, adéntrate ya en el mundo de Albion y escribe tu propia historia" /> */}

      {/* Ejercicio 4.1*/}
      {/* <ParentCounter /> */}

      {/* Ejercicio 4.2*/}
      {/* <ImageGallery /> */}

      {/* Ejercicio 4.3 - Respuesta: Mapa*/}
      <Game /> 

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
});

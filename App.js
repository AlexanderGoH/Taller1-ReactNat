import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Greetings from './components/Greetings';
import UserDetails from './components/UserDetails';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={{width: 100, height: 100, marginBottom: 20}}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Am%C3%A9rica_de_Cali_a%C3%B1os_40s.svg/600px-Am%C3%A9rica_de_Cali_a%C3%B1os_40s.svg.png',
      }}/>

      {/* Ejercicio 1.1*/}
      <View style={{marginBottom: 20}}>     
        <Greetings name="Lola" />
      </View>

      {/* Ejercicio 1.2*/}
      <View style={{marginBottom: 20}}>
        <UserDetails name="Alexander" age="19" ocupation="Estudiante" />
      </View>

      {/* Ejercicio 1.3*/}
      <View style={{marginBottom: 20}}>
        <Task task={{title: "Tarea 1", completed: true}} />
        <Task task={{title: "Tarea 2", completed: false}} />
      </View> 

      
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

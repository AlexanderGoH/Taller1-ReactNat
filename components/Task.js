import React from 'react';
import { View, Text } from 'react-native';

const Task = (prop) => {
    return (
        <View>
            <Text>{prop.task.title}</Text>
            {prop.task.completed ? <Text style={{color: 'green'}}>Completada</Text> : <Text style={{color: 'red'}}>Pendiente</Text>}
        </View>
    );
}

export default Task;

 
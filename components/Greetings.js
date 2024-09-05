import React from 'react';
import { View, Text } from 'react-native';

const Greetings = (prop) => {
    return (
        <View>
            <Text>Hola, {prop.name}!</Text>
        </View>
    );
};

export default Greetings;
import React from 'react';
import { View, Text } from 'react-native';

const UserDetails = (prop) => {
    return (
        <View>
            <Text>Nombre: {prop.name}</Text>
            <Text>Edad: {prop.age}</Text>
            <Text>Ocupación: {prop.ocupation}</Text>
        </View>
    );
}

export default UserDetails;
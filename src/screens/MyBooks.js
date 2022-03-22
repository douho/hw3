import React from "react";
import { View, Text } from 'react-native';

// Make a component
const MyBooks = ({ navigation }) => {
    return (
        <View style={{
          backgroundColor: '#F2E4B6',
          alignItems:"center",
          justifyContent:"center",
          height:"100%",
        }}>
        <Text style = {{ fontSize: 20, alignSelf:'center'}}>Settings</Text>
        </View>
    );
}

export default MyBooks;

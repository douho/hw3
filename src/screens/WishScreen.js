import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import me from '../json/me.json';

// Make a component
const WishScreen = ({ navigation }) => {
    return (
      <View style={styles.headerStyle}>
        <Text style = {styles.title}>Wishlist</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    alignSelf:'center',
  },
  headerStyle:{
    backgroundColor: '#F2E4B6',
    alignItems:"center",
    justifyContent:"center",
    height:"100%",
  },
})
export default WishScreen;

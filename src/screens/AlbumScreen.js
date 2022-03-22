import React from "react";
import { View, FlatList } from "react-native";
//import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/album_section.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
      data={albumData.data}
      renderItem={({ item }) => 
      <AlbumDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
    </View>
  );
};

export default AlbumScreen;

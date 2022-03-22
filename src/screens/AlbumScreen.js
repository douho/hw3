import React from "react";
import { View, FlatList } from "react-native";
//import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import Albumlist from "../components/AlbumList";
import albumData from "../json/album_section.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
      data={albumData[0].data}
      renderItem={({ item }) => 
      <Albumlist 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />
    </View>
  );
};

export default AlbumScreen;

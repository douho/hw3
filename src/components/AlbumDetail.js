import React from "react";
//import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";
//import HotAlbumDetail from "./HotAlbumDetail";
//import sections from "../json/album_section.json";


const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{album.title}</Text>
            <Text>{album.artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', album)}
          >
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
          </TouchableOpacity>
        </View>   
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    width: "100%",
    height: 210,
    paddingLeft: 75,
    paddingRight: 75,
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    height: 210,
    width: 300,
  }
});

export default AlbumDetail;

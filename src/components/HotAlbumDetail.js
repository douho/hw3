import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const HotAlbumDetail = props => {
   let { album } = props;
   return (
     <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
          <Image
            style={styles.imageStyle}
            source={{uri: album.image}}
          />
      </View> 
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginLeft: 4,
    marginRight: 4,
    // backgroundColor: "blue",
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 20,
    marginBottom: 8,
    width: 140,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  headerContentStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: "#131313",
    width: '100%',
    marginTop: 8,
    opacity: 0.5,
  },
  imageStyle: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginLeft: 16,
    height: 200,
    width: 140,
  }
});

export default HotAlbumDetail;

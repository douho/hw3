import React from "react";
import { StyleSheet, Text, View, Image, Pressable} from "react-native";
//import { NavigationContainerRefContext, useNavigation } from "@react-navigation/native";
//import Navigation from "../navigation";
import StarRating from "react-native-star-rating";
import { useNavigation } from '@react-navigation/native';

const HotAlbumDetail = (props) => {
  const navigation = useNavigation();
   let { album } = props;
   return (
     <View style={{flexDirection: 'column', }}>
      <View style={styles.cardContainerStyle}>
        <Pressable
          onPress={() => navigation.navigate('Detail',album)}
        >
          <Image
            style={styles.imageStyle}
            source={{uri: album.image}}
          />
        </Pressable>
      </View> 
      
      <View style={styles.headerContainerStyle}>
          {album.star ? (
          <View style={styles.starBar}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={album.rating}
            fullStarColor={"#FFC41F"}
            starSize={14}
            starStyle={{marginRight:4}}
            containerStyle={{justifyContent:'flex-start'}}
            emptyStarColor={'#EDEDEF'}
            emptyStar = {"star"}
            />
          </View>
          ) : null}
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>   
    </View>

  )};

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginLeft: 4,
    marginRight: 4,
    backgroundColor:'#fff',
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 20,
    marginBottom: 8,
    width: 140,
    backgroundColor:'#fff',
  },
  starBar:{
    // width: 86,
    // height: 14,
    marginTop: 16.5,
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

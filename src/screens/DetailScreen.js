import React from "react";
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';


const DetailScreen = ({ route }) => {
  const { title, 
          artist,
          image,
          descriptions
        } = route.params;

  return (
    <ScrollView style = {styles.bg}>
      <View style = {styles.bookContainer}>
        <Image 
          style = {styles.imageStyle}
          source ={{
            uri: image
          }}
        />
      </View>

      <View style = {styles.name}>
        <Text style = {styles.bookName}>{title}</Text>
        <Text style = {styles.artist}>{artist}</Text>
      </View>
        <View style = {styles.rate}>
          <View style = {styles.stars}>
            <Image style = {styles.starSelf} source = {require('../icon/Star1.png')}/>
            <Image style = {styles.starSelf} source = {require('../icon/Star1.png')}/>
            <Image style = {styles.starSelf} source = {require('../icon/Star1.png')}/>
            <Image style = {styles.starSelf} source = {require('../icon/Star1.png')}/>
            <Image style = {styles.starSelf} source = {require('../icon/Star2.png')}/>
          </View>
          <Text style = {styles.rateNumber}>4.0/5.0</Text>
        </View>
        <View style = {styles.intro}>
          <Text style = {styles.introWords}>{descriptions}</Text>
        </View>
        <View style = {styles.buy}>
          <Text style = {styles.buyWords}>BUY NOW FOR $46.99</Text>
        </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor: "#fff",
  },
  bookContainer:{
    width: 360,
    height: 300,
    alignContent:"center",
    marginBottom: 28,
    // backgroundColor:"red",
  },
  imageStyle:{
    alignSelf:"center",
    height: 300,
    width: 210,
  },
  name:{
    width: 320,
    alignItems:"center",
    marginBottom: 8,
    marginLeft: 20,
    marginRight:20,
  },
  bookName:{
    fontSize: 24,
    fontWeight: "500",
    alignContent:"center",
    color: "#131313",
    marginBottom: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  artist:{
    fontSize: 14,
    fontWeight: "400",
    alignContent:"center",
    color: "#666666",
  },
  rate:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom: 8,
  },
  stars:{
    height:14,
    width:86,
    marginRight: 8,
    flexDirection:"row",
    alignSelf: "center",
    justifyContent:'center',
    // backgroundColor:'black',
  },
  starSelf:{
    marginRight: 4,
    height: 13,
    width: 14,
    alignItems: "center",
    justifyContent:'center',
  },
  rateNumber:{
    fontSize: 14,
    fontWeight: "400",
    width: 53,
    height: 16,
    // justifyContent:'center',
    textAlign:'center',
    // backgroundColor:'red',
    alignSelf:'center',
  },
  intro:{
    // alignContent:'center',
    alignItems:'stretch',
    width: 320,
    height: 72,
    marginHorizontal: 20,
    marginBottom: 28,
  },
  introWords:{
    color: "#000",
    width: 320,
    height: 72,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    lineHeight:24,
  },
  buy:{
    width: 190,
    height: 36,
    marginHorizontal: 85,
    marginBottom: 50,
    backgroundColor: "#6200EE",
    justifyContent:'center',
    borderRadius: 4,
  },
  buyWords:{
    width: 158,
    height: 16,
    color:"#fff",
    fontSize: 14,
    fontWeight: '400',
    alignSelf: "center",
    textAlign: 'center',
    justifyContent: "center",
  },
})
export default DetailScreen;

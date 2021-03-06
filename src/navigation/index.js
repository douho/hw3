import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, Image ,Pressable,StyleSheet,TouchableHighlight, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DetailScreen from '../screens/DetailScreen';
import MyBooks from '../screens/MyBooks';
import WishScreen from '../screens/WishScreen';

import albumData from "../json/album_section.json";
import Albumlist from '../components/AlbumList';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarStyle:{
            height:56,
            paddingBottom:8
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="WishList" 
        component={WishScreen} 
        options={{
          headerShown: false,
          title: "WishList",
          tabBarStyle:{
            height:56,
            paddingBottom:8
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="MyBooks" 
        component={MyBooks} 
        options={{
          headerShown: false,
          title: "MyBooks",
          tabBarStyle:{
            height:56,
            paddingBottom:8
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={24}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Home"
        component={Albumlist}
        options={{
          title: albumData.albumTitle,
          headerShadowVisible:false,
          headerTitleStyle: {
            fontSize: 20,
            color: "#fff",
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
            />
          ),
          headerRight:() =>(
            <Image
            style={styles.btn}
            source={require("../icon/search.png")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerShadowVisible:false,
          headerTitleStyle: {
            fontSize: 20,
            color: "#fff",
          },
          // headerLeft:() =>(
          //   <MaterialCommunityIcons name="chevron-left" color="#000" size={24} style={styles.btn}/>
          // ),
          headerRight: () =>(
            <MaterialCommunityIcons name="bookmark-outline" color="#000" size={24} style={styles.btn}/>
          )
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginRight: 10,
  },
});

export default Navigation;
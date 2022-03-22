import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

//import Albumlist from '../src/components/AlbumList';
import DetailScreen from '../src/screens/DetailScreen';
import SettingsScreen from '../src/screens/SettingsScreen';
import WishScreen from '../src/screens/WishScreen';
//import albumData from "../src/json/albums.json";
import section from "../src/json/album_section.json" 
import AlbumScreen from '../src/screens/AlbumScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AlbumStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={AlbumScreen} 
          options={{
            title: section.title,
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={({ route }) => ({ 
            title: route.params.title,
            headerStyle: {
              backgroundColor: '#4F9DEB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            }, 
           })}
        />      
      </Stack.Navigator>
  );
}


const Index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='AlbumStack'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === 'Home') {
              iconPath = focused
              ? require('../assets/icon_home_actived.png'):
              require('../assets/icon_home.png');
            } else if (route.name === 'Wishlist') {
              iconPath = focused
              ? require('../assets/icon_nav_bookmark_actived.png'):
              require('../assets/icon_nav_bookmark.png');
            } else if (route.name == 'My books') {
              iconPath = focused
              ? require('../assets/icon_mybook_actived.png'):
              require('../assets/icon_mybook.png');
            }

            // You can return any component that you like here!
            return (
              <Image 
                style={{width: 24, height: 24}}
                source={iconPath} 
              />
            );
          },
          tabBarStyle: { 
            height: 80,
          },
            activeTintColor: '#6200EE',
            inactiveTintColor: '#666666',
            labelStyle: {
              fontSize: 12,
              marginTop: 3,
              marginBottom: 8,
              padding: 0,
            },
            tabBarIconStyle: {
              marginTop: 8,
            },
        })}
      >
        <Tab.Screen name="Home" component={AlbumStack} />
        <Tab.Screen name="Wishlist" component={WishScreen} />
        <Tab.Screen name="My books" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Index;
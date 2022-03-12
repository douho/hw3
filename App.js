import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Header from './src/components/Header';
import Newest from './src/components/Newests';
import Popular from './src/components/Popular';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <Newest />
      <Popular />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

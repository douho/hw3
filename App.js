import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import Header from './src/components/Header';
import Index from './navigator';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Header />
      <Index />
    </SafeAreaView>
  );
};
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

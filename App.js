import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header/index';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

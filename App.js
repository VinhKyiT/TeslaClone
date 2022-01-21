import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CarItem from './components/carItem/index';

const App = () => {
  return (
    <View style={styles.container}>
      <CarItem />
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

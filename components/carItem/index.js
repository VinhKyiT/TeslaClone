import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from './../StyledButton/index';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at 100$</Text>
      </View>
      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => console.warn('Custom Orer Was Pressed')}
      />
      <StyledButton
        type="secondary"
        content="Existing inventory"
        onPress={() => console.warn('Existing Inventory Was Pressed')}
      />
    </View>
  );
};

export default CarItem;

import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from './../StyledButton/index';

const CarItem = props => {
  const {image, name, tagline, taglineCTA} = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {`${tagline} `}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.bottomContainer}>
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
    </View>
  );
};

export default CarItem;

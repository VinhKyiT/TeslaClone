import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const StyledButton = ({type, content, onPress}) => {
  const backgroundColor = type === 'primary' ? '#00aaff' : '#fff';
  const textColor = type === 'primary' ? '#fff' : '#000';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

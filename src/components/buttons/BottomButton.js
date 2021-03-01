import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {Button} from 'native-base';

const BottomButton = (props) => {
  const text = props.text;

  return (
    <Button block transparent>
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 30 : 28,
  },
});

export default BottomButton;

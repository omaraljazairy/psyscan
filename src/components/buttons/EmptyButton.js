import React from 'react';
import {Button, Text} from 'galio-framework';
import {View, Platform, StyleSheet} from 'react-native';
import I18n from '../../services/translations/translation';

const EmptyButton = (props) => {
  const text = props.text;
  const btnText = props.btnText;
  const size = Platform.OS === 'ios' ? 18 : 15;
  const btnSize = props.btnSize;

  return (
    <View>
      <Text style={styles.textHeader}>{I18n.t(text).toUpperCase()}</Text>
      <Button
        color={props.color ? props.color : '#20a2cb'}
        size={btnSize}
        style={styles.button}
        onPress={() => props.togglePicker()}>
        <Text size={size} bold color="#fff">
          {btnText}
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: '70%',
    height: Platform.OS === 'ios' ? 30 : 20,
    marginBottom: 5,
    color: '#ffffff',
    backgroundColor: '#d0d7e2',
    borderRadius: 5,
  },
  textHeader: {
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: Platform.OS === 'ios' ? 15 : 5,
  },
});

export default EmptyButton;

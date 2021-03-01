import React from 'react';
import {StyleSheet, View, Text, TextInput, Platform} from 'react-native';
import I18n from '../../services/translations/translation';

const TextFieldLable = (props) => {
  const text = props.text;

  return (
    <View>
      <Text style={styles.textInputHeader}>{I18n.t(text).toUpperCase()}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'center',
    width: '70%',
    height: Platform.OS === 'ios' ? 30 : 20,
    marginBottom: 5,
    color: '#ffffff',
    backgroundColor: '#d0d7e2',
    borderRadius: 5,
  },
  textInputHeader: {
    color: '#fff',
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: Platform.OS === 'ios' ? 15 : 5,
  },
});

export default TextFieldLable;

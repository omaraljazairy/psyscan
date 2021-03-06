import React from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';
import I18n from '../../services/translations/translation';
import CONSTANTS from '../../constants/styles';

const CustomLabelTwoLines = (props) => {
  const text1 = props.text1;
  const text2 = props.text2;

  return (
    <View style={styles.textView}>
      <Text style={styles.text1}>{I18n.t(text1).toUpperCase()}</Text>
      <Text style={styles.text2}>{I18n.t(text2).toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    alignItems: 'center',
  },
  text1: {
    backgroundColor: CONSTANTS.COLOR.MATISSE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 300,
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 11 : 9,
    fontWeight: 'normal',
    color: CONSTANTS.COLOR.WHITE,
    padding: Platform.OS === 'ios' ? 6 : 4,
  },
  text2: {
    backgroundColor: CONSTANTS.COLOR.MATISSE,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 300,
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    fontWeight: 'bold',
    color: CONSTANTS.COLOR.WHITE,
    padding: Platform.OS === 'ios' ? 6 : 4,
  },
});

export default CustomLabelTwoLines;

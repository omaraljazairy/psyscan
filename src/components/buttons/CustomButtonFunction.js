import React from 'react';
import {StyleSheet, View, Platform, Text, TouchableOpacity} from 'react-native';
import I18n from '../../services/translations/translation';
import CONSTANTS from '../../constants/styles';

const CustomButtonFunction = (props) => {
  const text = props.text;
  const btnWidth = props.btnWidth ? props.btnWidth : 300;
  const bgColor = props.bgColor ? props.bgColor : CONSTANTS.COLOR.EASTERN_BLUE;

  return (
    <View>
      <TouchableOpacity
        style={{...styles.button, width: btnWidth}}
        onPress={() => props.customFunc()}>
        <Text style={{...styles.text, backgroundColor: bgColor}}>
          {I18n.t(text).toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  button: {
    height: Platform.OS === 'ios' ? 30 : 28,
    // width: 300,
    borderRadius: 5,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    fontWeight: 'bold',
    color: CONSTANTS.COLOR.WHITE,
    padding: Platform.OS === 'ios' ? 6 : 4,
  },
});

export default CustomButtonFunction;

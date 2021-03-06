import React from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';
import I18n from '../../services/translations/translation';
import CONSTANTS from '../../constants/styles';

const CustomLabel = (props) => {
  const text = props.text;
  const textFontWeight = props.textFontWeight ? props.textFontWeight : 'bold';
  const textFontSize = props.textFontSize ? props.textFontSize : 15;
  const deviceFontSize =
    Platform.OS === 'ios' ? textFontSize : textFontSize - 2;

  return (
    <View>
      <Text
        style={{
          ...styles.text,
          fontSize: deviceFontSize,
          fontWeight: textFontWeight,
        }}>
        {I18n.t(text).toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: CONSTANTS.COLOR.EASTERN_BLUE,
    height: Platform.OS === 'ios' ? 30 : 28,
    width: 300,
    borderRadius: 5,
    textAlign: 'center',
  },
  text: {
    backgroundColor: CONSTANTS.COLOR.EASTERN_BLUE,
    borderRadius: 5,
    width: 300,
    textAlign: 'center',
    color: CONSTANTS.COLOR.WHITE,
    padding: Platform.OS === 'ios' ? 6 : 4,
  },
});

export default CustomLabel;

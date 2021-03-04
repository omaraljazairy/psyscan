import React from 'react';
import {Button, Text} from 'galio-framework';
import {StyleSheet, Platform} from 'react-native';
import I18n from '../../services/translations/translation';
import CONSTANTS from '../../constants/styles';

const SelectButton = (props) => {
  const text = props.text;
  const size = Platform.OS === 'ios' ? 18 : 15;
  const btnSize = props.btnSize;

  return (
    <Button
      color={props.color ? props.color : CONSTANTS.COLOR.FAUX_PACIFIC_BLUE}
      size={btnSize}>
      <Text size={size} bold color={CONSTANTS.COLOR.WHITE} style={styles.text}>
        {I18n.t(text).toUpperCase()}
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});

export default SelectButton;

import React from 'react';
import {Button, Text} from 'galio-framework';
import {Platform} from 'react-native';
import I18n from '../../services/translations/translation';

const SelectButton = (props) => {
  const text = props.text;
  const size = Platform.OS === 'ios' ? 18 : 15;
  const btnSize = props.btnSize;

  return (
    <Button color={props.color ? props.color : '#20a2cb'} size={btnSize}>
      <Text size={size} bold color="#fff">
        {I18n.t(text).toUpperCase()}
      </Text>
    </Button>
  );
};

export default SelectButton;

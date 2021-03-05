import React from 'react';
import {Button, Text} from 'galio-framework';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import I18n from '../../services/translations/translation';

const BlockButton = (props) => {
  const navigation = useNavigation();
  const screenName = props.screenName;
  const text = props.text;
  const size = Platform.OS === 'ios' ? 15 : 13;
  const btnSize = props.btnSize;

  return (
    <Button
      color={props.color ? props.color : '#20a2cb'}
      size={btnSize}
      onPress={() => navigation.navigate(screenName)}>
      <Text size={size} bold color="#fff">
        {I18n.t(text).toUpperCase()}
      </Text>
    </Button>
  );
};

export default BlockButton;

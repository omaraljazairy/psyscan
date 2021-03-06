import React from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';
import I18n from '../../services/translations/translation';
import CONSTANTS from '../../constants/styles';
import {Icon} from 'native-base';

const CustomLabelIcon = (props) => {
  const text = props.text;

  return (
    <View style={styles.view}>
      <Icon type="AntDesign" name="checkcircle" style={styles.icon} />
      <Text style={styles.text}>{I18n.t(text).toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: '12%',
    paddingVertical: 5,
  },
  icon: {
    fontSize: 20,
    color: CONSTANTS.COLOR.BLACK,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    fontWeight: '300',
    color: CONSTANTS.COLOR.WHITE,
  },
});

export default CustomLabelIcon;

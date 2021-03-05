import React from 'react';
import {StyleSheet, View, Platform, Text, TouchableOpacity} from 'react-native';
import I18n from '../../services/translations/translation';
import CONSTANTS from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

const CustomButton = (props) => {
  const text = props.text;
  const navigation = useNavigation();
  const screenName = props.screenName;
  const navProps = props.navProps ? props.navProps : {}
  const btnWidth = props.btnWidth ? props.btnWidth : 300;
  const btnHeight = props.btnHeight ? props.btnHeight : 30;
  const bgColor = props.bgColor ? props.bgColor : CONSTANTS.COLOR.EASTERN_BLUE;
  const devicebtnHeight = Platform.OS === 'ios' ? btnHeight : btnHeight - 2;
  const textBtnHeight = props.txtBtnHeight ? props.txtBtnHeight : null;
  const paddingVertical = props.txtPaddingVertical
    ? props.txtPaddingVertical
    : 6;
  const devicePaddingVertical =
    Platform.OS === 'ios' ? paddingVertical : paddingVertical - 2;

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={{...styles.button, width: btnWidth, height: devicebtnHeight}}
        onPress={
          screenName
            ? () => navigation.navigate(screenName, navProps)
            : () => props.customFunc()
        }>
        <Text
          style={{
            ...styles.text,
            backgroundColor: bgColor,
            height: textBtnHeight,
            paddingVertical: devicePaddingVertical,
          }}>
          {I18n.t(text).toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    // padding: 5,
    // height: 100,
  },
  button: {
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    fontWeight: 'bold',
    color: CONSTANTS.COLOR.WHITE,
    // paddingVertical: Platform.OS === 'ios' ? 6 : 4,
  },
});

export default CustomButton;

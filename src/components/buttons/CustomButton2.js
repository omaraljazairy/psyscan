import React from 'react';
import {StyleSheet, View, Platform, Text, TouchableOpacity} from 'react-native';
import I18n from '../../services/translations/translation';
import CONSTANTS from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

const CustomButton2 = (props) => {
  const text = props.text;
  const navigation = useNavigation();
  const screenName = props.screenName;
  const navProps = props.navProps ? props.navProps : {};
  const btnWidth = props.btnWidth ? props.btnWidth : null;
  // const btnHeight = props.btnHeight ? props.btnHeight : 30;
  const bgColor = props.bgColor ? props.bgColor : CONSTANTS.COLOR.EASTERN_BLUE;
  const textColor = props.textColor ? props.textColor : CONSTANTS.COLOR.WHITE;
  const borderColor = props.borderColor ? props.borderColor : null;
  // const devicebtnHeight = Platform.OS === 'ios' ? btnHeight : btnHeight - 5;
  // const textBtnHeight = props.txtBtnHeight ? props.txtBtnHeight : null;
  const paddingVertical = props.paddingVertical ? props.paddingVertical : null;
  const devicePaddingVertical =
    Platform.OS === 'ios' ? paddingVertical : paddingVertical - 2;

  const paddingHorizontal = props.paddingHorizontal
    ? props.paddingHorizontal
    : null;

  const devicepaddingHorizontal =
    Platform.OS === 'ios' ? paddingHorizontal : paddingHorizontal - 2;

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: bgColor,
          borderColor: borderColor,
          paddingVertical: devicePaddingVertical,
          paddingHorizontal: devicepaddingHorizontal,
          width: btnWidth,
        }}
        onPress={
          screenName
            ? () => navigation.navigate(screenName, navProps)
            : () => props.customFunc()
        }>
        <Text
          style={{
            ...styles.text,
            // backgroundColor: bgColor,
            // height: textBtnHeight,
            // paddingVertical: devicePaddingVertical,
            color: textColor,
          }}>
          {I18n.t(text).toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
  },
  button: {
    // paddingTop: Platform.OS === 'ios' ? 10 : 12,
    // paddingBottom: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    fontWeight: 'bold',
    color: CONSTANTS.COLOR.WHITE,
    // paddingVertical: Platform.OS === 'ios' ? 6 : 4,
  },
});

export default CustomButton2;

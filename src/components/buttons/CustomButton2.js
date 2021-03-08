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
  const btnWidth = props.btnWidth ? props.btnWidth : 300;
  // const btnHeight = props.btnHeight ? props.btnHeight : 30;
  const bgColor = props.bgColor ? props.bgColor : CONSTANTS.COLOR.EASTERN_BLUE;
  const textColor = props.textColor ? props.textColor : CONSTANTS.COLOR.WHITE;
  // const devicebtnHeight = Platform.OS === 'ios' ? btnHeight : btnHeight - 5;
  // const textBtnHeight = props.txtBtnHeight ? props.txtBtnHeight : null;
  // const paddingVertical = props.txtPaddingVertical
  //   ? props.txtPaddingVertical
  //   : 6;
  // const devicePaddingVertical =
  //   Platform.OS === 'ios' ? paddingVertical : paddingVertical - 2;

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: bgColor, width: btnWidth}}
        onPress={
          screenName
            ? () => navigation.navigate(screenName, navProps)
            : () => props.customFunc()
        }>
        <Text
          style={{
            ...styles.text,
            backgroundColor: bgColor,
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
    paddingTop: Platform.OS === 'ios' ? 19 : 12,
    paddingBottom: 15,
    paddingHorizontal: 10,
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

import React from 'react';
import {StyleSheet, View, Platform, Text, TouchableOpacity} from 'react-native';
import I18n from '../../services/translations/translation';
import CONSTANTS from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

const CustomButton = (props) => {
  const text = props.text;
  const navigation = useNavigation();
  const screenName = props.screenName;
  const btnWidth = props.btnWidth ? props.btnWidth : 300;
  const btnHeight = props.btnHeight ? props.btnHeight : 30;
  const bgColor = props.bgColor ? props.bgColor : CONSTANTS.COLOR.EASTERN_BLUE;
  const devicebtnHeight = Platform.OS === 'ios' ? btnHeight : btnHeight - 2;

  return (
    <View>
      <TouchableOpacity
        style={{...styles.button, width: btnWidth, height: devicebtnHeight}}
        onPress={
          screenName
            ? () => navigation.navigate(screenName)
            : () => props.customFunc()
        }>
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
    // backgroundColor: CONSTANTS.COLOR.EASTERN_BLUE,
    // height: Platform.OS === 'ios' ? 30 : 28,
    // width: 300,
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    // backgroundColor: CONSTANTS.COLOR.EASTERN_BLUE,
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 15 : 13,
    fontWeight: 'bold',
    color: CONSTANTS.COLOR.WHITE,
    padding: Platform.OS === 'ios' ? 6 : 4,
  },
});

export default CustomButton;

import React from 'react';
import {Text, StyleSheet, Platform, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const Bottom = (props) => {
  const text = props.text;
  const navigation = useNavigation();
  const leftScreenName = props.leftScreenName;
  const rightScreenName = props.rightScreenName;
  const navProps = props.navProps ? props.navProps : {};
  const textFontWeight = props.textFontWeight ? props.textFontWeight : 'bold';
  const textFontSize = props.textFontSize ? props.textFontSize : 30;
  const deviceFontSize =
    Platform.OS === 'ios' ? textFontSize : textFontSize - 2;

  return (
    <View style={styles.bottomView}>
      <View style={styles.contentView}>
        <Icon
          name="left"
          type="antdesign"
          color={'#fff'}
          size={20}
          iconStyle={styles.icon}
          onPress={() => navigation.navigate(leftScreenName, navProps)}
        />
        <Button block transparent>
          <Text
            style={{
              ...styles.text,
              fontWeight: textFontWeight,
              fontSize: deviceFontSize,
            }}>
            {text}
          </Text>
        </Button>
        <Icon
          name="right"
          type="antdesign"
          color={'#fff'}
          size={20}
          iconStyle={styles.icon}
          onPress={() => navigation.navigate(rightScreenName, navProps)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
  },
  contentView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
  icon: {
    paddingHorizontal: 60,
  },
});

export default Bottom;

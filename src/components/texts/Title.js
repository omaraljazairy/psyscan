import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import I18n from '../../services/translations/translation';
import {Divider} from 'react-native-elements';

const Title = (props) => {
  const text = props.text;

  return (
    <View style={styles.titleView}>
      <Text style={styles.text}>{I18n.t(text).toUpperCase()}</Text>
      <Divider style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 2,
    color: '#fff',
    textAlign: 'center',
    width: 160,
    fontSize: Platform.OS === 'ios' ? 20 : 18,
    paddingBottom: 10,
  },
  divider: {
    backgroundColor: '#000',
    height: 3,
    width: 300,
    alignSelf: 'center',
  },
});

export default Title;

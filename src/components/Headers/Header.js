import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import I18n from '../../services/translations/translation';
import {Divider} from 'react-native-elements';

const Header = (props) => {
  const text = props.text;
  const divider = props.noDivider ? null : <Divider style={styles.divider} />;

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{I18n.t(text).toUpperCase()}</Text>
      {divider}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 10,
    marginTop: Platform.OS === 'ios' ? '10%' : '1%',
    paddingBottom: 20,
    // paddingHorizontal: '10%',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 2,
    color: '#fff',
    textAlign: 'center',
    width: 200,
    fontSize: Platform.OS === 'ios' ? 20 : 18,
    paddingBottom: 10,
  },
  divider: {
    backgroundColor: '#000',
    height: 3,
    width: 200,
    alignSelf: 'center',
  },
});

export default Header;

import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import I18n from '../../services/translations/translation';
import {Divider} from 'react-native-elements';

const Header = (props) => {
  const text = props.text;

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{I18n.t(text).toUpperCase()}</Text>
      <Divider style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 10,
    marginTop: Platform.OS === 'ios' ? '10%' : '1%',
    paddingBottom: 20,
    paddingHorizontal: '10%',
    width: '100%',
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 2,
    color: '#fff',
    textAlign: 'center',
    width: 180,
    fontSize: Platform.OS === 'ios' ? 20 : 18,
    paddingBottom: 10,
    // paddingLeft: 10,
    marginHorizontal: '24%',
  },
  divider: {
    backgroundColor: '#000',
    height: 3,
    width: 150,
    alignSelf: 'center',
  },
});

export default Header;

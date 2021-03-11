import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

const KeyboardAvoidView = ({children}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    {children}
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidView;

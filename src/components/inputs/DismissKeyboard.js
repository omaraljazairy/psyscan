import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import KeyboardAvoidView from './KeyboardAvoidView';

const DismissKeyboard = ({children}) => (
  <KeyboardAvoidView>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidView>
);

export default DismissKeyboard;

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform} from 'react-native';
import BlockButton from '../components/buttons/BlockButton';
import Bottom from '../components/Bottoms/Bottom';
import Title from '../components/texts/Title';
import TextFieldLable from '../components/inputs/TextFieldLable';
import DismissKeyboard from '../components/inputs/DismissKeyboard';

class Register extends Component {
  render() {
    return (
      <DismissKeyboard>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Title text={'welcome_back'} />
          </View>
          <View style={styles.form}>
            <TextFieldLable text="email" />
            <TextFieldLable text="password" />
            <TextFieldLable text="email" />
            <TextFieldLable text="password" />
            <TextFieldLable text="email" />
            <TextFieldLable text="password" />
            <TextFieldLable text="password" />
          </View>
          <View style={styles.blockButtonsView}>
            <BlockButton
              text={'register'}
              color="#20a2cb"
              screenName="MenuScreen"
            />
          </View>
          <Bottom text="PSYSCAN" />
        </SafeAreaView>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c5980',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? 40 : 2,
  },
  form: {
    alignSelf: 'stretch',
  },
  blockButtonsView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Register;

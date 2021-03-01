import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Platform} from 'react-native';
import {Divider} from 'react-native-elements';
import BlockButton from '../components/buttons/BlockButton';
import BottomButton from '../components/buttons/BottomButton';
import Title from '../components/texts/Title';
import TextFieldLable from '../components/inputs/TextFieldLable';
import {Icon} from 'native-base';
import I18n from '../../src/services/translations/translation';

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Title text={'welcome_back'} />
        </View>
        <View style={styles.form}>
          <TextFieldLable text="email" />
          <TextFieldLable text="password" />
          <Text style={styles.forgotPassword}>
            {I18n.t('forgot_password').toUpperCase()}
          </Text>
        </View>
        <View style={styles.iconViews}>
          <Icon
            name={Platform.OS === 'ios' ? 'ios-logo-facebook' : 'logo-facebook'}
          />
          <Icon
            name={Platform.OS === 'ios' ? 'ios-logo-google' : 'logo-google'}
          />
          <Icon
            name={Platform.OS === 'ios' ? 'ios-logo-linkedin' : 'logo-linkedin'}
          />
        </View>
        <View style={styles.blockButtonsView}>
          <BlockButton text={'login'} color="#20a2cb" screenName="MenuScreen" />
          <BlockButton
            text={'register'}
            color="#20a2cb"
            screenName="RegisterScreen"
          />
        </View>
        <View style={styles.bottomTextView}>
          <BottomButton text="PSYSCAN" />
        </View>
      </SafeAreaView>
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
    paddingBottom: 20,
    paddingTop: 50,
  },
  forgotPassword: {
    color: '#20a2cb',
    textAlign: 'center',
    fontSize: 14,
  },
  form: {
    alignSelf: 'stretch',
  },
  iconViews: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
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

export default Login;

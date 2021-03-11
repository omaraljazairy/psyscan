import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import BlockButton from '../components/buttons/BlockButton';
import Bottom from '../components/Bottoms/Bottom';
import Title from '../components/texts/Title';
import TextFieldLable from '../components/inputs/TextFieldLable';
import DismissKeyboard from '../components/inputs/DismissKeyboard';
import I18n from '../../src/services/translations/translation';
import {SocialIcon} from 'react-native-elements';

class Login extends Component {
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
            <Text style={styles.forgotPassword}>
              {I18n.t('forgot_password').toUpperCase()}
            </Text>
          </View>
          <View style={styles.iconViews}>
            <SocialIcon
              type="facebook"
              iconSize={20}
              raised={false}
              style={styles.icon}
            />
            <SocialIcon
              type="google"
              iconSize={20}
              raised={false}
              style={styles.icon}
            />
            <SocialIcon
              type="linkedin"
              iconSize={20}
              raised={false}
              style={styles.icon}
            />
          </View>
          <View style={styles.blockButtonsView}>
            <BlockButton
              text={'login'}
              color="#20a2cb"
              screenName="MenuScreen"
            />
            <BlockButton
              text={'register'}
              color="#20a2cb"
              screenName="RegisterScreen"
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    padding: 1,
    margin: 3,
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

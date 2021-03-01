import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import BlockButton from '../components/buttons/BlockButton';
import BottomButton from '../components/buttons/BottomButton';
// import I18n from '../../src/services/translations/translation';

class Intro extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonView}>
          <BlockButton
            text={'login'}
            color="#20a2cb"
            screenName="LoginScreen"
          />
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
  bottomTextView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Intro;

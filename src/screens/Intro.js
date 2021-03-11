import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import BlockButton from '../components/buttons/BlockButton';
import Bottom from '../components/Bottoms/Bottom';

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
        <Bottom text="PSYSCAN" />
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
  buttonView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Intro;

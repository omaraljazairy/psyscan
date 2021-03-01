import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Platform} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import SelectButton from '../../components/buttons/SelectButton';
// import I18n from '../../../src/services/translations/translation';

class Orientations extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'preliminary_testing'} />
        <View style={styles.bodyView}>
          <View style={styles.descriptionView}>
            <Text style={styles.descripnText}>
              How Much do you feel doubts about your sexual orientation
            </Text>
          </View>
          <View style={styles.buttonsView}>
            <SelectButton text="0%" btnSize="large" />
            <SelectButton text="25%" btnSize="large" />
            <SelectButton text="50%" btnSize="large" />
            <SelectButton text="100%" btnSize="large" />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="OrientationsScreen"
          rightScreenName="MenuScreen"
        />
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
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%',
  },
  descriptionView: {
    paddingVertical: 20,
    width: 250,
    flexWrap: 'nowrap',
  },
  descripnText: {
    color: 'yellow',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonsView: {
    flexDirection: 'column',
  },
});

export default Orientations;

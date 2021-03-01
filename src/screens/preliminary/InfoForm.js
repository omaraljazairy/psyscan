import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import TextFieldLable from '../../components/inputs/TextFieldLable';
// import I18n from '../../../src/services/translations/translation';

class InfoForm extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'preliminary_testing'} />
        <View style={styles.bodyView}>
          <TextFieldLable text="gender" />
          <TextFieldLable text="location" />
          <TextFieldLable text="occupation" />
          <TextFieldLable text="education" />
          <TextFieldLable text="race_culture" />
          <TextFieldLable text="relationship_status" />
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="MenuScreen"
          rightScreenName="OrientationsScreen"
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
    alignSelf: 'stretch',
    paddingBottom: Platform.OS === 'ios' ? '20%' : '10%',
    paddingTop: Platform.OS === 'ios' ? '20%' : '10%',
  },
});

export default InfoForm;

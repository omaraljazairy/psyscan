import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
// import I18n from '../../../src/services/translations/translation';

class YourActivityResults extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'in_depth_analysis'} />
        <View style={styles.bodyView} />
        <Bottom
          text="PSYSCAN"
          leftScreenName="YourActivityScreen"
          rightScreenName="SectionMenuScreen"
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
});

export default YourActivityResults;

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Platform} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import BlockButton from '../../components/buttons/BlockButton';
import I18n from '../../../src/services/translations/translation';

class SectionMenu extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'advanced_testing'} />
        <View style={styles.bodyView}>
          <View style={styles.textView}>
            <Text style={styles.introText}>
              {I18n.t('advanced_testing_intro')}
            </Text>
          </View>
          <View style={styles.optionsView}>
            <BlockButton
              // btnSize="small"
              text="your_activity"
              screenName="YourActivityScreen"
            />
            <BlockButton
              // btnSize="small"
              text="text_analysis"
              screenName="TextAnalysisFirstScreen"
            />
            <BlockButton
              // btnSize="small"
              text="audio_analysis"
              screenName="AudioAnalysisFirstScreen"
            />
            <BlockButton
              // btnSize="small"
              text="face_scan"
              screenName="MainPageScreen"
            />
            <BlockButton
              // btnSize="small"
              text="video_analysis"
              screenName="MainPageScreen"
            />
          </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%',
  },
  textView: {
    paddingHorizontal: 10,
    paddingBottom: 30,
    alignSelf: 'stretch',
  },
  optionsView: {
    justifyContent: 'center',
  },
  introText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});

export default SectionMenu;

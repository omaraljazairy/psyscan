import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform, Text} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import CONSTANTS from '../../constants/styles';
import CustomButton from '../../components/buttons/CustomButton';
import CustomLabelTwoLines from '../../components/labels/CustomLabelTwoLines';
import I18n from '../../services/translations/translation';

class TextAnalysisResultFirst extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'text_analysis'} />
        <View style={styles.bodyView}>
          <Text style={styles.headerText}>
            {I18n.t('your_results').toUpperCase()}
          </Text>
          <View style={styles.labelView}>
            <CustomLabelTwoLines
              text1={'words_analyzed'}
              text2={'very_strong_analysis'}
            />
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>
              {I18n.t('your_results_description')}
            </Text>
          </View>
          <View style={styles.lastButtonsView}>
            <CustomButton
              text={'more_details'}
              screenName="TextAnalysisResultSecondScreen"
              txtBtnHeight={50}
              txtPaddingVertical={15}
              btnWidth={150}
            />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="TextAnalysisFourthScreen"
          rightScreenName="TextAnalysisResultSecondScreen"
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
    paddingTop: Platform.OS === 'ios' ? '10%' : '1%',
  },
  labelView: {
    paddingBottom: 10,
  },
  headerText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
    paddingBottom: 10,
  },
  descriptionView: {
    padding: 5,
  },
  descriptionText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_SIZE_ANDROID,
    textAlign: 'center',
  },
  lastButtonsView: {
    padding: 10,
    paddingTop: 30,
  },
});

export default TextAnalysisResultFirst;

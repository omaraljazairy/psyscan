import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform, Text} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import CONSTANTS from '../../constants/styles';
import CustomLabelIcon from '../../components/labels/CustomLabelIcon';
import I18n from '../../services/translations/translation';

class TextAnalysisResultSecond extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'advanced_testing'} />
        <View style={styles.bodyView}>
          <Text style={styles.headerText}>
            {I18n.t('your_results').toUpperCase()}
          </Text>
          <Text style={styles.labelBoldText}>
            {I18n.t('you_are_likely').toUpperCase()}
          </Text>
          <CustomLabelIcon text={'your_result_bullet_1'} />
          <CustomLabelIcon text={'your_result_bullet_2'} />
          <CustomLabelIcon text={'your_result_bullet_3'} />
          <Text style={styles.labelBoldText}>
            {I18n.t('you_are_unlikely').toUpperCase()}
          </Text>
          <CustomLabelIcon text={'your_result_bullet_4'} />
          <CustomLabelIcon text={'your_result_bullet_5'} />
          <CustomLabelIcon text={'your_result_bullet_6'} />
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="TextAnalysisResultFirstScreen"
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
    paddingTop: Platform.OS === 'ios' ? '10%' : '1%',
  },
  labelBoldText: {
    padding: 20,
    color: CONSTANTS.COLOR.WHITE,
    fontWeight: 'bold',
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
});

export default TextAnalysisResultSecond;

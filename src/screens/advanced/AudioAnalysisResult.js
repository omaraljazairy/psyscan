import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Platform} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import I18n from '../../../src/services/translations/translation';
import {Icon} from 'native-base';
import CONSTANTS from '../../constants/styles';
import CustomSlider from '../../components/sliders/CustomSlider';
import CustomButton from '../../components/buttons/CustomButton';

class AudioAnalysisResult extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'audio_analysis'} />
        <View style={styles.bodyView}>
          <View style={styles.iconView}>
            <Icon
              type="FontAwesome5"
              name="microphone-alt"
              style={styles.icon}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>
              {I18n.t('your_results').toUpperCase()}
            </Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>
              {I18n.t('your_result_explanation')}
            </Text>
          </View>
          <View style={styles.lastButtonsView}>
            <CustomButton
              text={'next_step'}
              screenName="AudioAnalysisSecondScreen"
              txtBtnHeight={50}
              txtPaddingVertical={15}
              btnWidth={150}
            />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="MenuScreen"
          rightScreenName="AudioAnalysisSecondScreen"
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
    paddingTop: Platform.OS === 'ios' ? '3%' : '2%',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.OS === 'ios' ? 5 : 3,
  },
  icon: {
    fontSize: Platform.OS === 'ios' ? 100 : 80,
    color: CONSTANTS.COLOR.WHITE,
  },
  textView: {
    paddingVertical: 10,
    width: 120,
    flexWrap: 'nowrap',
  },
  text: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
  },
  sliderView: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  descriptionView: {
    paddingHorizontal: 40,
    paddingTop: 20,
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
    paddingBottom: Platform.OS === 'ios' ? 5 : 20,
    paddingTop: Platform.OS === 'ios' ? 55 : 20,
  },
});

export default AudioAnalysisResult;

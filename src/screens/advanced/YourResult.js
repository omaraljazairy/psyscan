import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Platform} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';
import CustomSlider from '../../components/sliders/CustomSlider';
import CustomButton from '../../components/buttons/CustomButton';

class YourResult extends Component {
  state = {
    percentage1: 60,
    percentage2: 40,
    percentage3: 90,
    percentage4: 28,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'your_results'} />
        <View style={styles.bodyView}>
          <View style={styles.sliderView}>
            <View style={styles.textView}>
              <Text style={styles.textH2}>
                {I18n.t('level_of_stress').toUpperCase()}
              </Text>
            </View>
            <CustomSlider
              onValueChange={(value) => console.log('value ', value)}
              defaultValue={this.state.percentage1}
              isDisabled={true}
            />
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionText}>
                {I18n.t('how_you_can_work_on_it')}
              </Text>
            </View>
          </View>

          <View style={styles.sliderView}>
            <View style={styles.textView}>
              <Text style={styles.textH2}>
                {I18n.t('level_of_emotional_flexibility').toUpperCase()}
              </Text>
            </View>
            <CustomSlider
              onValueChange={(value) => console.log('value ', value)}
              defaultValue={this.state.percentage2}
              isDisabled={true}
            />
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionText}>
                {I18n.t('how_you_can_work_on_it')}
              </Text>
            </View>
          </View>

          <View style={styles.sliderView}>
            <View style={styles.textView}>
              <Text style={styles.textH2}>
                {I18n.t('sense_of_self_esteem').toUpperCase()}
              </Text>
            </View>
            <CustomSlider
              onValueChange={(value) => console.log('value ', value)}
              defaultValue={this.state.percentage3}
              isDisabled={true}
            />
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionText}>
                {I18n.t('how_you_can_work_on_it')}
              </Text>
            </View>
          </View>

          <View style={styles.sliderView}>
            <View style={styles.textView}>
              <Text style={styles.textH2}>
                {I18n.t('sense_of_reality').toUpperCase()}
              </Text>
            </View>
            <CustomSlider
              onValueChange={(value) => console.log('value ', value)}
              defaultValue={this.state.percentage4}
              isDisabled={true}
            />
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionText}>
                {I18n.t('how_you_can_work_on_it')}
              </Text>
            </View>
          </View>

          <View style={styles.lastButtonsView}>
            <CustomButton
              text={'our_advise'}
              screenName="RecommendResultScreen"
              txtBtnHeight={50}
              txtPaddingVertical={15}
              btnWidth={150}
              bgColor={CONSTANTS.COLOR.WHITE}
              textColor={CONSTANTS.COLOR.EASTERN_BLUE}
            />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="SectionMenuScreen"
          rightScreenName="RecommendResultScreen"
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
  textView: {
    paddingVertical: 1,
  },
  textH2: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H2_IOS
        : CONSTANTS.FONT.HEADER_H2_ANDROID,
    textAlign: 'center',
  },
  sliderView: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  descriptionView: {
    paddingHorizontal: 40,
    // paddingTop: 5,
    paddingBottom: 20,
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

export default YourResult;

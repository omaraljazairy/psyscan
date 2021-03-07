import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform, Text} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import CONSTANTS from '../../constants/styles';
import CustomButton from '../../components/buttons/CustomButton';
import CustomLabel from '../../components/labels/CustomLabel';
import I18n from '../../services/translations/translation';
import {Slider} from 'galio-framework';
import {Icon} from 'native-base';

class TextAnalysisResultThird extends Component {
  state = {
    sliderPercentage1: 94,
    sliderPercentage2: 81,
    sliderPercentage3: 84,
    sliderPercentage4: 84,
    sliderPercentage5: 81,
    showToast1: false,
    showToast2: false,
    showToast3: false,
    showToast4: false,
    showToast5: false,
  };

  onSliderMove(value, sliderNumber) {
    console.log('slider value: ', value);
    switch (sliderNumber) {
      case 1:
        this.setState({sliderPercentage1: value});
        break;
      case 2:
        this.setState({sliderPercentage2: value});
        break;
      case 3:
        this.setState({sliderPercentage3: value});
        break;
      case 4:
        this.setState({sliderPercentage4: value});
        break;
      case 5:
        this.setState({sliderPercentage5: value});
        break;
      default:
        return;
    }
  }

  onSetToast(toastNumber) {
    console.log('toastNumber: ', toastNumber);
    switch (toastNumber) {
      case 1:
        this.setState({showToast1: !this.state.showToast1});
        break;
      case 2:
        this.setState({showToast2: !this.state.showToast2});
        break;
      case 3:
        this.setState({showToast3: !this.state.showToast3});
        break;
      case 4:
        this.setState({showToast4: !this.state.showToast4});
        break;
      case 5:
        this.setState({showToast5: !this.state.showToast5});
        break;
      default:
        return;
    }
  }

  render() {
    const label = this.state.showToast1 ? (
      <CustomLabel
        text={'your_result_slider'}
        textFontSize={8}
        textFontWeight={'400'}
      />
    ) : null;
    const arrowIconNameTest = this.state.showToast1
      ? 'keyboard-arrow-down'
      : 'keyboard-arrow-up';
    const arrowIconName = 'keyboard-arrow-up';
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'text_analysis'} />
        <View style={styles.bodyView}>
          <Text style={styles.headerText}>
            {I18n.t('your_results').toUpperCase()}
          </Text>
          <Text style={styles.labelBoldText}>
            {I18n.t('personality').toUpperCase()}
          </Text>
          <View style={styles.sliderView}>
            <View style={styles.sliderTrackText}>
              <Icon
                type="MaterialIcons"
                name={arrowIconNameTest}
                style={styles.icon}
                onPress={() => this.onSetToast(1)}
              />
              <Text style={styles.sliderText}>{I18n.t('personality')}</Text>
            </View>
            <View style={styles.sliderOwnView}>
              <Slider
                maximumValue={100}
                minimumValue={1}
                value={this.state.sliderPercentage1}
                onValueChange={(value) => this.onSliderMove(value, 1)}
                step={1}
                trackStyle={styles.sliderTrack}
                thumbStyle={styles.sliderThumb}
                activeColor={CONSTANTS.COLOR.PURPLE}
              />
            </View>
            <View style={styles.sliderTrackBottomText}>
              <Text style={styles.sliderPercentageText}>
                {String(this.state.sliderPercentage1) + '%'}
              </Text>
            </View>
            {label}
          </View>
          <View style={styles.sliderView}>
            <View style={styles.sliderTrackText}>
              <Icon
                type="MaterialIcons"
                name={arrowIconName}
                style={styles.icon}
              />
              <Text style={styles.sliderText}>{I18n.t('agreeableness')}</Text>
            </View>
            <View style={styles.sliderOwnView}>
              <Slider
                maximumValue={100}
                minimumValue={1}
                value={this.state.sliderPercentage2}
                onValueChange={(value) => this.onSliderMove(value, 2)}
                step={1}
                trackStyle={styles.sliderTrack}
                thumbStyle={styles.sliderThumb}
                activeColor={CONSTANTS.COLOR.PURPLE}
              />
            </View>
            <View style={styles.sliderTrackBottomText}>
              <Text style={styles.sliderPercentageText}>
                {String(this.state.sliderPercentage2) + '%'}
              </Text>
            </View>
          </View>
          <View style={styles.sliderView}>
            <View style={styles.sliderTrackText}>
              <Icon
                type="MaterialIcons"
                name={arrowIconName}
                style={styles.icon}
              />
              <Text style={styles.sliderText}>
                {I18n.t('conscientiousness')}
              </Text>
            </View>
            <View style={styles.sliderOwnView}>
              <Slider
                maximumValue={100}
                minimumValue={1}
                value={this.state.sliderPercentage3}
                onValueChange={(value) => this.onSliderMove(value, 3)}
                step={1}
                trackStyle={styles.sliderTrack}
                thumbStyle={styles.sliderThumb}
                activeColor={CONSTANTS.COLOR.PURPLE}
              />
            </View>
            <View style={styles.sliderTrackBottomText}>
              <Text style={styles.sliderPercentageText}>
                {String(this.state.sliderPercentage3) + '%'}
              </Text>
            </View>
          </View>
          <View style={styles.sliderView}>
            <View style={styles.sliderTrackText}>
              <Icon
                type="MaterialIcons"
                name={arrowIconName}
                style={styles.icon}
              />
              <Text style={styles.sliderText}>
                {I18n.t('achievement_striving')}
              </Text>
            </View>
            <View style={styles.sliderOwnView}>
              <Slider
                maximumValue={100}
                minimumValue={1}
                value={this.state.sliderPercentage4}
                onValueChange={(value) => this.onSliderMove(value, 4)}
                step={1}
                trackStyle={styles.sliderTrack}
                thumbStyle={styles.sliderThumb}
                activeColor={CONSTANTS.COLOR.PURPLE}
              />
            </View>
            <View style={styles.sliderTrackBottomText}>
              <Text style={styles.sliderPercentageText}>
                {String(this.state.sliderPercentage4) + '%'}
              </Text>
            </View>
          </View>
          <View style={styles.sliderView}>
            <View style={styles.sliderTrackText}>
              <Icon
                type="MaterialIcons"
                name={arrowIconName}
                style={styles.icon}
              />
              <Text style={styles.sliderText}>{I18n.t('dutifulness')}</Text>
            </View>
            <View style={styles.sliderOwnView}>
              <Slider
                maximumValue={100}
                minimumValue={1}
                value={this.state.sliderPercentage5}
                onValueChange={(value) => this.onSliderMove(value, 5)}
                step={1}
                trackStyle={styles.sliderTrack}
                thumbStyle={styles.sliderThumb}
                activeColor={CONSTANTS.COLOR.PURPLE}
              />
            </View>
            <View style={styles.sliderTrackBottomText}>
              <Text style={styles.sliderPercentageText}>
                {String(this.state.sliderPercentage5) + '%'}
              </Text>
            </View>
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
          leftScreenName="TextAnalysisResultSecondScreen"
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
    paddingTop: Platform.OS === 'ios' ? '5%' : '1%',
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
    paddingBottom: 3,
  },
  sliderView: {
    paddingBottom: 5,
    width: '99%',
    paddingHorizontal: 40,
  },
  sliderOwnView: {
    height: Platform.OS === 'ios' ? 35 : 25,
  },
  sliderTrack: {
    backgroundColor: CONSTANTS.COLOR.EASTERN_BLUE,
    height: 5,
  },
  sliderThumb: {
    backgroundColor: CONSTANTS.COLOR.BRIGHT_TURQUOISE,
    borderColor: CONSTANTS.COLOR.WHITE,
  },
  sliderTrackText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 50,
    height: Platform.OS === 'ios' ? 15 : 15,
  },
  sliderTrackBottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  sliderPercentageText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize: 10,
    fontWeight: 'bold',
  },
  sliderText: {
    fontSize: Platform.OS === 'ios' ? 15 : 12,
    color: CONSTANTS.COLOR.WHITE,
    paddingLeft: 50,
  },
  icon: {
    fontSize: Platform.OS === 'ios' ? 20 : 16,
    color: CONSTANTS.COLOR.WHITE,
  },
  lastButtonsView: {
    paddingBottom: Platform.OS === 'ios' ? 15 : 20,
  },
});

export default TextAnalysisResultThird;

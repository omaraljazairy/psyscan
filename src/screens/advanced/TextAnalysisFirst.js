import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform, Text} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import CONSTANTS from '../../constants/styles';
import CustomButtonFunction from '../../components/buttons/CustomButtonFunction';
import CustomLabel from '../../components/labels/CustomLabel';
import SimplePicker from '../../components/pickers/SimplePicker';
import BlockButton from '../../components/buttons/BlockButton';
import {Slider} from 'galio-framework';
import I18n from '../../services/translations/translation';
import {Icon} from 'native-base';
import {language} from '../../data/data';

class TextAnalysisFirst extends Component {
  state = {
    language: null,
    pickerName: null,
    pickerData: null,
  };

  togglePicker(pickerName) {
    console.log('toggle pickername: ', pickerName);
    this.setState({showPicker: !this.state.showPicker});
    switch (pickerName) {
      case 'language':
        this.setState({
          pickerName: pickerName,
          pickerData: language,
        });
        break;
      default:
        this.setState({
          pickerName: null,
          pickerData: null,
        });
    }
    console.log('pickerData: ', this.state.pickerData);
  }

  onValueChange(value) {
    console.log('onValueChange value language: ', value);
    console.log('this.state.pickerName : ', this.state.pickerName);

    switch (this.state.pickerName) {
      case 'language':
        this.setState({location: value});
        break;
      default:
        return;
    }
    console.log('state before toggle: ', this.state);
    this.togglePicker();
  }

  render() {
    const picker = this.state.showPicker ? (
      <SimplePicker
        onChange={(value) => this.onValueChange(value)}
        pickerData={this.state.pickerData}
      />
    ) : null;
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'advanced_testing'} />
        <View style={styles.bodyView}>
          <View style={styles.imageView}>
            <Icon type="AntDesign" name="filetext1" style={styles.image} />
          </View>
          <Text style={styles.headerText}>
            {I18n.t('text_analysis').toUpperCase()}
          </Text>
          <View style={styles.languageSelectionView}>
            {picker}
            <CustomButtonFunction
              text="language"
              customFunc={() => this.togglePicker('language')}
            />
          </View>
          <View style={styles.labelView}>
            <CustomLabel text={'is_it_your_mothertongue_language'} />
          </View>
          <View style={styles.optionButtonsView}>
            <CustomButtonFunction
              text={'yes'}
              btnWidth={100}
              bgColor={CONSTANTS.COLOR.ROCK_BLUE}
              customFunc={() => console.log()}
            />
            <CustomButtonFunction
              text={'no'}
              btnWidth={100}
              bgColor={CONSTANTS.COLOR.ROCK_BLUE}
              customFunc={() => console.log()}
            />
          </View>
          <View style={styles.CustomLabelView}>
            <CustomLabel text="language_level" />
          </View>
          <View style={styles.sliderView}>
            <Slider
              maximumValue={30}
              minimumValue={10}
              value={10}
              onValueChange={(value) => console.log('slide changed: ', value)}
              step={1}
              trackStyle={styles.sliderTrack}
              thumbStyle={styles.sliderThumb}
              activeColor={CONSTANTS.COLOR.PURPLE}
            />
            <View style={styles.sliderTrackText}>
              <Text style={styles.sliderText}>{I18n.t('elementary')}</Text>
              <Text style={styles.sliderText}>{I18n.t('intermediate')}</Text>
              <Text style={styles.sliderText}>{I18n.t('advanced')}</Text>
            </View>
          </View>
          <View style={styles.lastButtonsView}>
            <BlockButton text={'start_writing'} />
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
    paddingTop: Platform.OS === 'ios' ? '10%' : '1%',
  },
  imageView: {
    paddingBottom: 10,
  },
  image: {
    fontSize: 100,
    color: CONSTANTS.COLOR.WHITE,
  },
  headerText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
  },
  languageSelectionView: {
    padding: Platform.OS === 'ios' ? 10 : 5,
    width: '100%',
    alignItems: 'center',
  },
  labelView: {
    padding: 3,
  },
  optionButtonsView: {
    flexDirection: 'row',
    padding: 10,
  },
  sliderView: {
    paddingBottom: 5,
    width: '100%',
    paddingHorizontal: 5,
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
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  sliderText: {
    fontSize: 10,
    color: CONSTANTS.COLOR.WHITE,
  },
  lastButtonsView: {
    padding: 10,
  },
});

export default TextAnalysisFirst;

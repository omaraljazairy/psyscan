import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  Platform,
} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import BlockButton from '../../components/buttons/BlockButton';
import CustomLabel from '../../components/labels/CustomLabel';
import CONSTANTS from '../../constants/styles';
import I18n from '../../../src/services/translations/translation';
import {Slider} from 'galio-framework';

class YourActivityResults extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'advanced_testing'} />
        <View style={styles.bodyView}>
          <View style={styles.contactImageView}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.contactImage}
            />
          </View>
          <Text style={styles.your_activityText}>
            {I18n.t('your_activity').toUpperCase()}
          </Text>
          <View style={styles.CustomLabelView}>
            <CustomLabel text="physical_activity_last_2_days" />
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
          <View style={styles.CustomLabelView}>
            <CustomLabel text="social_activity_last_2_days" />
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

          <View style={styles.CustomLabelView}>
            <CustomLabel text="average_hours_of_sleep" />
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
            <BlockButton
              btnSize="small"
              text="save"
              screenName="SectionMenuScreen"
            />
            <BlockButton
              btnSize="small"
              text="analyse_see_results"
              screenName="SectionMenuScreen"
            />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="YourActivityScreen"
          rightScreenName="TextAnalysisFirstScreen"
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
    paddingBottom: Platform.OS === 'ios' ? 5 : 1,
    paddingTop: '1%',
  },
  contactImageView: {
    paddingBottom: 10,
  },
  contactImage: {
    height: Platform.OS === 'ios' ? 100 : 80,
    width: Platform.OS === 'ios' ? 100 : 80,
  },
  your_activityText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
  },
  CustomLabelView: {
    paddingTop: 15,
  },
  sliderView: {
    paddingBottom: 5,
    width: '100%',
    paddingHorizontal: 40,
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
    flexDirection: 'row',
  },
});

export default YourActivityResults;

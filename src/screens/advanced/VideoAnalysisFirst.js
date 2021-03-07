import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Platform} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import I18n from '../../../src/services/translations/translation';
import {Icon} from 'native-base';
import CONSTANTS from '../../constants/styles';
import CustomButton from '../../components/buttons/CustomButton';

class VideoAnalysisFirst extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'advanced_testing'} />
        <View style={styles.bodyView}>
          <View style={styles.iconView}>
            <Icon type="AntDesign" name="playcircleo" style={styles.icon} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>
              {I18n.t('video_analysis').toUpperCase()}
            </Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>
              {I18n.t('video_analysis_first_page_instructions')}
            </Text>
          </View>
          <View style={styles.lastButtonsView}>
            <CustomButton
              text={'start_video'}
              screenName="VideoAnalysisSecondScreen"
              txtBtnHeight={50}
              txtPaddingVertical={15}
              btnWidth={150}
            />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="SectionMenuScreen"
          rightScreenName="VideoAnalysisSecondScreen"
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
    width: 100,
  },
  text: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
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
    paddingTop: Platform.OS === 'ios' ? 85 : 50,
  },
});

export default VideoAnalysisFirst;

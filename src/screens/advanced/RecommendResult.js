import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Platform} from 'react-native';
import Bottom from '../../components/Bottoms/Bottom';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';
import CustomButton from '../../components/buttons/CustomButton';
import CustomButton2 from '../../components/buttons/CustomButton2';

class RecommendResult extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.textView}>
            <Text style={styles.textH1}>{I18n.t('psyscan').toUpperCase()}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.textH2}>
              {I18n.t('recommends_you').toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.bodyView}>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>
              {I18n.t('your_result_explanation')}
            </Text>
          </View>
          <View style={styles.buttonsView}>
            <View style={styles.lastButtonsView}>
              <CustomButton2
                text={'professionals_map'}
                screenName="PsychologistResultScreen"
                // txtBtnHeight={50}
                // txtPaddingVertical={15}
                btnWidth={250}
                bgColor={CONSTANTS.COLOR.WHITE}
                textColor={CONSTANTS.COLOR.EASTERN_BLUE}
              />
            </View>
            <View style={styles.lastButtonsView}>
              <CustomButton2
                text={'helpful_mentalhealth_applications'}
                screenName="PsychologistResultScreen"
                // txtBtnHeight={50}
                // txtPaddingVertical={15}
                btnWidth={250}
                bgColor={CONSTANTS.COLOR.WHITE}
                textColor={CONSTANTS.COLOR.EASTERN_BLUE}
              />
            </View>
            <View style={styles.lastButtonsView}>
              <CustomButton2
                text={'your_profile'}
                screenName="PsychologistResultScreen"
                bgColor={CONSTANTS.COLOR.EASTERN_BLUE}
                textColor={CONSTANTS.COLOR.WHITE}
                // txtBtnHeight={50}
                // txtPaddingVertical={15}
                btnWidth={250}
              />
            </View>
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="YourResultScreen"
          rightScreenName="PsychologistResultScreen"
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
  header: {
    flex: 2,
    paddingVertical: '1%',
    paddingHorizontal: '1%',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 1,
    height: '10%',
  },
  bodyView: {
    height: '85%',
    paddingTop: 30,
  },
  textView: {
    paddingVertical: 5,
  },
  textH1: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
  },
  textH2: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H2_IOS
        : CONSTANTS.FONT.HEADER_H2_ANDROID,
    textAlign: 'center',
  },
  descriptionView: {
    paddingHorizontal: 40,
    paddingVertical: 1,
    marginBottom: 1,
    position: 'relative',
  },
  descriptionText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_SIZE_ANDROID,
    textAlign: 'center',
  },
  buttonsView: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  lastButtonsView: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
  },
});

export default RecommendResult;

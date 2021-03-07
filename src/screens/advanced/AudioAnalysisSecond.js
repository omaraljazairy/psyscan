import React, {Component} from 'react';
import {StyleSheet, View, Platform, ImageBackground, Text} from 'react-native';
import Header from '../../components/Headers/Header';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';
import CustomSlider from '../../components/sliders/CustomSlider';

class AudioAnalysisSecond extends Component {
  render() {
    return (
      // <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/recording2.jpg')}
        style={styles.image}>
        <Header text={'processing'} />
        <View style={styles.bodyView}>
          <View style={styles.textDescriptionView}>
            <Text style={styles.text}>{I18n.t('tell_us_how_you_feel')}</Text>
          </View>
        </View>
        <View style={styles.sliderView}>
          <CustomSlider
            onValueChange={(value) => console.log()}
            defaultValue={70}
          />
          <Text style={styles.bottomText}>{I18n.t('recording')} 70%</Text>
        </View>
      </ImageBackground>

      // {/* <Bottom
      //   text="PSYSCAN"
      //   leftScreenName="AudioAnalysisFirstScreen"
      //   rightScreenName="MenuScreen"
      // /> */}
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c5980',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
  },
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%',
  },
  textDescriptionView: {
    alignContent: 'center',
  },
  text: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_SIZE_ANDROID,
  },
  sliderView: {
    width: '100%',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 15,
  },
  bottomText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
  },
});

export default AudioAnalysisSecond;

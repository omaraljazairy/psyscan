import React, {Component} from 'react';
import {StyleSheet, View, Platform, ImageBackground, Text} from 'react-native';
import Header from '../../components/Headers/Header';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';
import CustomSlider from '../../components/sliders/CustomSlider';
import Bottom from '../../components/Bottoms/Bottom';
import {Icon} from 'native-base';

class FaceScanSecond extends Component {
  state = {
    percentage: 70,
  };

  onValueChange(value) {
    this.setState({percentage: value});
  }

  render() {
    const percentageText = String(this.state.percentage) + ' %';

    return (
      <ImageBackground
        source={require('../../assets/images/facescan2.jpg')}
        style={styles.image}>
        <Header text={'processing'} />
        <View style={styles.bodyView} />
        <View style={styles.sliderView}>
          <View style={styles.buttonsView}>
            <Icon type="Entypo" name="controller-play" style={styles.icon} />
            <Icon type="AntDesign" name="pause" style={styles.icon} />
          </View>
          <CustomSlider
            onValueChange={(value) => this.onValueChange(value)}
            defaultValue={60}
          />
          <View style={styles.bottomView}>
            <Bottom
              text={I18n.t('scanning') + '  ' + percentageText}
              leftScreenName="FaceScanFirstScreen"
              rightScreenName="FaceScanThirdScreen"
              textFontWeight={'400'}
              textFontSize={CONSTANTS.FONT.HEADER_H1_IOS}
            />
          </View>
        </View>
      </ImageBackground>
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '30%' : '20%',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    fontSize: Platform.OS === 'ios' ? 30 : 28,
    color: CONSTANTS.COLOR.EASTERN_BLUE,
    paddingHorizontal: 20,
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
  bottomView: {
    paddingBottom: 10,
    paddingTop: 30,
  },
});

export default FaceScanSecond;

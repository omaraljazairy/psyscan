import React, {Component} from 'react';
import {StyleSheet, View, Platform, ImageBackground} from 'react-native';
import Header from '../../components/Headers/Header';
import CONSTANTS from '../../constants/styles';
import CustomSlider from '../../components/sliders/CustomSlider';
import BlockButton from '../../components/buttons/BlockButton';

class FaceScanThird extends Component {
  state = {
    percentage: 70,
  };

  onValueChange(value) {
    this.setState({percentage: value});
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/facescan2.jpg')}
        style={styles.image}>
        <Header text={'complete'} />
        <View style={styles.bodyView} />
        <View style={styles.sliderView}>
          <View style={styles.lastButtonsView}>
            <BlockButton
              btnSize="small"
              text="save"
              screenName="FaceScanResultScreen"
            />
            <BlockButton
              btnSize="small"
              text="analyse_see_results"
              screenName="FaceScanResultScreen"
            />
          </View>
          <CustomSlider
            onValueChange={(value) => this.onValueChange(value)}
            defaultValue={100}
          />
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
  lastButtonsView: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 150 : 50,
    paddingHorizontal: 50,
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

export default FaceScanThird;

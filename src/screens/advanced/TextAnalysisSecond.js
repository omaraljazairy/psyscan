import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform, Text} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import CONSTANTS from '../../constants/styles';
import CustomButtonFunction from '../../components/buttons/CustomButtonFunction';
import BlockButton from '../../components/buttons/BlockButton';
import I18n from '../../services/translations/translation';
import {Icon} from 'native-base';

class TextAnalysisSecond extends Component {
  render() {
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
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionText}>{I18n.t('advice_text')}</Text>
          </View>
          <View style={styles.iconsView}>
            <Icon type="AntDesign" name="twitter" style={styles.icon} />
            <Icon type="AntDesign" name="instagram" style={styles.icon} />
          </View>
          <View style={styles.connectInfoView}>
            <Text style={styles.connectInfo}>{I18n.t('connect_info')}</Text>
          </View>
          <View style={styles.connectBtnView}>
            <CustomButtonFunction
              text={'connect'}
              btnWidth={100}
              bgColor={CONSTANTS.COLOR.ROCK_BLUE}
              customFunc={() => console.log()}
            />
          </View>
          <Text style={styles.or}>{I18n.t('or')}</Text>
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
    fontSize: Platform.OS === 'ios' ? 100 : 80,
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
  descriptionView: {
    padding: 5,
  },
  descriptionText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_SIZE_ANDROID,
    textAlign: 'center',
  },
  iconsView: {
    flexDirection: 'row',
    padding: 5,
  },
  icon: {
    color: CONSTANTS.COLOR.WHITE,
    paddingHorizontal: 10,
  },
  connectInfoView: {
    padding: 3,
  },
  connectInfo: {
    textAlign: 'center',
    color: CONSTANTS.COLOR.WHITE,
    fontSize: CONSTANTS.FONT.DESCRIPTION_SIZE_IOS,
    fontWeight: 'bold',
  },
  connectBtnView: {
    padding: 10,
  },
  or: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize: 15,
    fontWeight: 'bold',
  },
  lastButtonsView: {
    padding: 10,
  },
});

export default TextAnalysisSecond;

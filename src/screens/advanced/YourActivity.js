import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
} from 'react-native';
import Header from '../../components/Headers/Header';
import SelectButton from '../../components/buttons/SelectButton';
import Bottom from '../../components/Bottoms/Bottom';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';

class YourActivity extends Component {
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
          <View style={styles.heartImageView}>
            <Image
              source={require('../../assets/images/health2.jpg')}
              style={styles.heartImage}
            />
            {/* <Icon type="AntDesign" name="heart" style={styles.heartImage} /> */}
          </View>
          <View style={styles.descriptionTextView}>
            <Text style={styles.descriptionText}>
              {I18n.t('your_activity_description').toUpperCase()}
            </Text>
          </View>
          <View style={styles.buttonsView}>
            <SelectButton text="connect" btnSize="small" />
            <SelectButton text="complete_manually" btnSize="small" />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="SectionMenuScreen"
          rightScreenName="YourActivityResultsScreen"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLOR.CERULEAN,
    justifyContent: 'center',
  },
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '10%' : '10%',
  },
  contactImageView: {
    paddingBottom: 10,
  },
  contactImage: {
    height: Platform.OS === 'ios' ? 150 : 120,
    width: Platform.OS === 'ios' ? 150 : 120,
  },
  your_activityText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    textAlign: 'center',
    marginBottom: 10,
  },
  heartImageView: {
    padding: 0,
  },
  heartImage: {
    height: Platform.OS === 'ios' ? 80 : 60,
    width: Platform.OS === 'ios' ? 80 : 60,
    borderRadius: 10,
  },
  descriptionTextView: {
    padding: 20,
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
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 70,
  },
});

export default YourActivity;

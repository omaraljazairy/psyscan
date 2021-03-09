import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Platform} from 'react-native';
import {Divider} from 'react-native-elements';
import {Icon} from 'native-base';
import I18n from '../../../src/services/translations/translation';
import CONSTANTS from '../../constants/styles';
import Bottom from '../../components/Bottoms/Bottom';
import CustomSlider from '../../components/sliders/CustomSlider';
import CustomButton2 from '../../components/buttons/CustomButton2';

class Journal extends Component {
  state = {
    list: [1, 1, 1, 1],
  };

  onValueChange(value, sliderNumber) {
    console.log('value: ', value);
    this.setState((state) => {
      const list = state.list.map((item, j) => {
        if (j === sliderNumber) {
          return value;
        } else {
          return item;
        }
      });
      return {
        list,
      };
    });
  }
  render() {
    const hours = String(this.state.list[0]);
    const distance = String(this.state.list[1]) + 'km';
    const elevated_mood = String(this.state.list[2]);
    const noneColor1 =
      elevated_mood < 25 ? CONSTANTS.COLOR.WHITE : CONSTANTS.COLOR.ROCK_BLUE;
    const mildColor1 =
      elevated_mood >= 25 && elevated_mood < 50
        ? CONSTANTS.COLOR.WHITE
        : CONSTANTS.COLOR.ROCK_BLUE;
    const normalColor1 =
      elevated_mood >= 50 && elevated_mood < 75
        ? CONSTANTS.COLOR.WHITE
        : CONSTANTS.COLOR.ROCK_BLUE;
    const highColor1 =
      elevated_mood >= 75 ? CONSTANTS.COLOR.WHITE : CONSTANTS.COLOR.ROCK_BLUE;

    const depressed_mood = this.state.list[3];
    const noneColor2 =
      depressed_mood < 25 ? CONSTANTS.COLOR.WHITE : CONSTANTS.COLOR.ROCK_BLUE;
    const mildColor2 =
      depressed_mood >= 25 && depressed_mood < 50
        ? CONSTANTS.COLOR.WHITE
        : CONSTANTS.COLOR.ROCK_BLUE;
    const normalColor2 =
      depressed_mood >= 50 && depressed_mood < 75
        ? CONSTANTS.COLOR.WHITE
        : CONSTANTS.COLOR.ROCK_BLUE;
    const highColor2 =
      depressed_mood >= 75 ? CONSTANTS.COLOR.WHITE : CONSTANTS.COLOR.ROCK_BLUE;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon type="Ionicons" name="person" style={styles.icon} />
          <Text style={styles.headerText}>{I18n.t('you').toUpperCase()}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.questionText}>
            {I18n.t('how_are_you_feeling_today').toUpperCase()}
          </Text>
        </View>
        <View style={styles.bodyView}>
          <View style={styles.sliderSectionsView}>
            <View style={styles.selectionView}>
              <Text style={styles.sliderText}>
                {I18n.t('hours_slept_last_night').toUpperCase()}
              </Text>
              <View style={styles.sliderView}>
                <CustomSlider
                  onValueChange={(value) => this.onValueChange(value, 0)}
                  defaultValue={this.state.list[0]}
                />
                <Text style={styles.sliderBottomText}>{hours}</Text>
              </View>
            </View>
          </View>
          <View style={styles.sliderSectionsView}>
            <View style={styles.selectionView}>
              <Text style={styles.sliderText}>
                {I18n.t('physical_activity').toUpperCase()}
              </Text>
              <View style={styles.sliderView}>
                <CustomSlider
                  onValueChange={(value) => this.onValueChange(value, 1)}
                  defaultValue={this.state.list[1]}
                />
                <Text style={styles.sliderBottomText}>{distance}</Text>
              </View>
            </View>
          </View>
          <View style={styles.sliderSectionsView}>
            <View style={styles.selectionView}>
              <Text style={styles.sliderText}>
                {I18n.t('today_most_elevated_mood').toUpperCase()}
              </Text>
              <View style={styles.sliderView}>
                <CustomSlider
                  onValueChange={(value) => this.onValueChange(value, 2)}
                  defaultValue={this.state.list[2]}
                />
                <View style={styles.buttomTextViews}>
                  <Text style={{...styles.none, color: noneColor1}}>
                    {I18n.t('none').toUpperCase()}
                  </Text>
                  <Text style={{...styles.none, color: mildColor1}}>
                    {I18n.t('mild').toUpperCase()}
                  </Text>
                  <Text style={{...styles.none, color: normalColor1}}>
                    {I18n.t('normal').toUpperCase()}
                  </Text>
                  <Text style={{...styles.none, color: highColor1}}>
                    {I18n.t('high').toUpperCase()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.sliderSectionsView}>
            <View style={styles.selectionView}>
              <Text style={styles.sliderText}>
                {I18n.t('today_most_depressed_mood').toUpperCase()}
              </Text>
              <View style={styles.sliderView}>
                <CustomSlider
                  onValueChange={(value) => this.onValueChange(value, 3)}
                  defaultValue={this.state.list[3]}
                />
                <View style={styles.buttomTextViews}>
                  <Text style={{...styles.none, color: noneColor2}}>
                    {I18n.t('none').toUpperCase()}
                  </Text>
                  <Text style={{...styles.none, color: mildColor2}}>
                    {I18n.t('mild').toUpperCase()}
                  </Text>
                  <Text style={{...styles.none, color: normalColor2}}>
                    {I18n.t('normal').toUpperCase()}
                  </Text>
                  <Text style={{...styles.none, color: highColor2}}>
                    {I18n.t('high').toUpperCase()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonsSectionsView}>
            <View style={styles.selectionView}>
              <Text style={styles.sliderText}>
                {I18n.t('talk_therapy_today').toUpperCase()}
              </Text>
              <View style={styles.buttonsView}>
                <CustomButton2
                  text={'yes'}
                  // screenName="PsychologistResultScreen"
                  customFunc={() => console.log()}
                  btnWidth={100}
                  paddingVertical={5}
                  paddingHorizontal={15}
                  bgColor={CONSTANTS.COLOR.CERULEAN}
                  textColor={CONSTANTS.COLOR.WHITE}
                  borderColor={CONSTANTS.COLOR.WHITE}
                />
                <CustomButton2
                  text={'no'}
                  customFunc={() => console.log()}
                  btnWidth={100}
                  paddingVertical={5}
                  paddingHorizontal={15}
                  bgColor={CONSTANTS.COLOR.CERULEAN}
                  textColor={CONSTANTS.COLOR.FOUNTAIN_BLUE}
                  borderColor={CONSTANTS.COLOR.WHITE}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomNav}>
          <Bottom
            text="PSYSCAN"
            leftScreenName="YourResultScreen"
            rightScreenName="PsychologistResultScreen"
          />
        </View>
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
    flex: 3,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    paddingTop: 10,
    fontSize: 50,
    color: CONSTANTS.COLOR.WHITE,
  },
  headerText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.HEADER_H1_IOS
        : CONSTANTS.FONT.HEADER_H1_ANDROID,
    paddingVertical: 10,
  },
  divider: {
    backgroundColor: CONSTANTS.COLOR.WHITE,
    height: 3,
    width: 100,
    alignSelf: 'center',
    marginTop: 5,
  },
  bodyView: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: Platform.OS === 'ios' ? '20%' : '10%',
    paddingTop: Platform.OS === 'ios' ? '1%' : '1%',
    marginBottom: 50,
  },
  sliderSectionsView: {
    flex: 3,
    flexDirection: 'column',
    width: '100%',
  },
  questionText: {
    top: 30,
    color: CONSTANTS.COLOR.WHITE,
    textAlign: 'center',
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_SIZE_ANDROID,
  },
  sliderText: {
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_2_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_2_SIZE_ANDROID,
    textAlign: 'center',
  },
  buttomTextViews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  none: {
    // color: CONSTANTS.COLOR.ROCK_BLUE,
    fontSize: 8,
  },
  sliderBottomText: {
    textAlign: 'center',
    color: CONSTANTS.COLOR.WHITE,
    fontSize:
      Platform.OS === 'ios'
        ? CONSTANTS.FONT.DESCRIPTION_2_SIZE_IOS
        : CONSTANTS.FONT.DESCRIPTION_2_SIZE_ANDROID,
  },
  buttonsSectionsView: {
    paddingTop: 10,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 8,
  },
  selectionView: {
    width: '100%',
    paddingHorizontal: 10,
  },
  sliderView: {
    paddingTop: 1,
  },
  bottomNav: {
    position: 'relative',
    marginTop: 10,
  },
});

export default Journal;

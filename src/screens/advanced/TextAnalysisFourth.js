import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  TextInput,
} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import CONSTANTS from '../../constants/styles';
import CustomButton from '../../components/buttons/CustomButton';

class TextAnalysisFourth extends Component {
  render() {
    const {input} = this.props.route.params;
    console.log('myText received: ', input);
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'text_analysis'} />
        <View style={styles.bodyView}>
          <View style={styles.textareaView}>
            <TextInput
              style={styles.textarea}
              numberOfLines={100}
              multiline={true}
              value={input}
            />
          </View>
          <View style={styles.lastButtonsView}>
            <View style={styles.lastButtonView}>
              <CustomButton
                text={'save'}
                screenName="TextAnalysisResultFirstScreen"
                btnWidth={130}
                txtBtnHeight={50}
                txtPaddingVertical={15}
              />
            </View>
            <View style={styles.lastButtonView}>
              <CustomButton
                text={'analyse_see_results'}
                screenName="TextAnalysisResultFirstScreen"
                btnWidth={130}
                txtBtnHeight={50}
              />
            </View>
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="TextAnalysisThirdScreen"
          rightScreenName="TextAnalysisResultFirstScreen"
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
  textareaView: {
    padding: 5,
    width: 300,
  },
  textarea: {
    height: Platform.OS === 'ios' ? 380 : 360,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: CONSTANTS.COLOR.ROCK_BLUE,
    color: CONSTANTS.COLOR.WHITE,
  },
  lastButtonsView: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignContent: 'space-between',
    // width: '100%',
  },
  lastButtonView: {
    padding: 10,
  },
});

export default TextAnalysisFourth;

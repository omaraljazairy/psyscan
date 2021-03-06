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

class TextAnalysisThird extends Component {
  state = {
    userInput: null,
  };

  setText(value) {
    this.setState({userInput: value});
    console.log('value from textarea: ', value);
  }

  render() {
    const dataProps = {input: this.state.userInput};
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'text_analysis'} />
        <View style={styles.bodyView}>
          <View style={styles.textareaView}>
            <TextInput
              style={styles.textarea}
              numberOfLines={100}
              multiline={true}
              onChangeText={(text) => this.setText(text)}
              value={this.state.userInput}
            />
          </View>
          <View style={styles.lastButtonsView}>
            <CustomButton
              text={'save'}
              screenName="TextAnalysisFourthScreen"
              btnWidth={100}
              navProps={dataProps}
            />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="TextAnalysisSecondScreen"
          rightScreenName="TextAnalysisFourthScreen"
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
    padding: 10,
  },
});

export default TextAnalysisThird;

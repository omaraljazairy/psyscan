import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  TextInput,
  Keyboard,
} from 'react-native';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import CONSTANTS from '../../constants/styles';
import CustomButton from '../../components/buttons/CustomButton';
import DismissKeyboard from '../../components/inputs/DismissKeyboard';

class TextAnalysisThird extends Component {
  state = {
    userInput: null,
    isKeyboardShow: false,
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShowListener.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHideListener.bind(this),
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  setText(value) {
    this.setState({userInput: value});
    console.log('value from textarea: ', value);
  }

  keyboardDidShowListener() {
    console.log('keyboard shown');
    this.setState({isKeyboardShow: true});
  }

  keyboardDidHideListener() {
    console.log(' hidden');
    this.setState({isKeyboardShow: false});
  }

  render() {
    const dataProps = {input: this.state.userInput};
    const bottonNav = this.state.isKeyboardShow ? null : (
      <Bottom
        text="PSYSCAN"
        leftScreenName="TextAnalysisSecondScreen"
        rightScreenName="TextAnalysisFourthScreen"
      />
    );
    return (
      <DismissKeyboard>
        <SafeAreaView style={styles.container}>
          <Header text={'text_analysis'} />
          <View style={styles.bodyView}>
            <View style={styles.textareaView}>
              <TextInput
                style={styles.textarea}
                numberOfLines={50}
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
          {bottonNav}
        </SafeAreaView>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c5980',
    justifyContent: 'flex-start',
  },
  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 10 : 1,
    paddingTop: Platform.OS === 'ios' ? '20%' : '20%',
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

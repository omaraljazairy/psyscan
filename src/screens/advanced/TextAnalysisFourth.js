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

class TextAnalysisFourth extends Component {
  state = {
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

  keyboardDidShowListener() {
    console.log('keyboard shown');
    this.setState({isKeyboardShow: true});
  }

  keyboardDidHideListener() {
    console.log(' hidden');
    this.setState({isKeyboardShow: false});
  }

  render() {
    const {input} = this.props.route.params;
    console.log('myText received: ', input);
    const bottonNav = this.state.isKeyboardShow ? null : (
      <Bottom
        text="PSYSCAN"
        leftScreenName="TextAnalysisThirdScreen"
        rightScreenName="TextAnalysisResultFirstScreen"
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
    paddingTop: Platform.OS === 'ios' ? '15%' : '10%',
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

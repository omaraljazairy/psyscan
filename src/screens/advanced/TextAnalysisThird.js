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
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header text={'advanced_testing'} />
        <View style={styles.bodyView}>
          <View style={styles.textareaView}>
            <TextInput
              style={styles.textarea}
              numberOfLines={100}
              multiline={true}
            />
          </View>
          <View style={styles.lastButtonsView}>
            <CustomButton
              text={'save'}
              screenName="TextAnalysisThirdScreen"
              btnWidth={100}
            />
          </View>
        </View>
        <Bottom
          text="PSYSCAN"
          leftScreenName="TextAnalysisSecondScreen"
          rightScreenName="MenuScreen"
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

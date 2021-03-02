import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import SimplePicker from '../../components/pickers/SimplePicker';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import TextFieldLable from '../../components/inputs/TextFieldLable';
import EmptyButton from '../../components/buttons/EmptyButton';

// import I18n from '../../../src/services/translations/translation';

class InfoForm extends Component {
  state = {
    gender: null,
    city: null,
    showPicker: false,
  };

  locations = [
    {label: 'Basra', value: 'Basra'},
    {label: 'Zaandam', value: 'Zaandam'},
    {label: 'Almere', value: 'Almere'},
    {label: 'Amsterdam', value: 'Amsterdam'},
  ];

  genders = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Others', value: 'Others'},
  ];

  togglePicker() {
    this.setState({showPicker: !this.state.showPicker});
    console.log('picker controller pressed');
    console.log('showPickker value: ', this.state.showPicker);
  }

  onValueChange(value) {
    this.setState({city: value});
    console.log('onValueChange value city: ', value);
    console.log('onValueChange city: ', this.state.city);
    this.togglePicker();
  }

  render() {
    const picker = this.state.showPicker ? (
      <SimplePicker onChange={(value) => this.onValueChange(value)} />
    ) : null;

    return (
      <SafeAreaView style={styles.container}>
        <Header text={'preliminary_testing'} />
        <View style={styles.bodyView}>
          {picker}
          <EmptyButton
            text="gender"
            btnSize="large"
            togglePicker={() => this.togglePicker()}
            btnText={this.state.gender}
          />
          <EmptyButton
            text="location"
            btnSize="large"
            togglePicker={() => this.togglePicker()}
            btnText={this.state.city}
          />
          <TextFieldLable text="occupation" />
          <TextFieldLable text="education" />
          <TextFieldLable text="race_culture" />
          <TextFieldLable text="relationship_status" />
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
    alignSelf: 'stretch',
    paddingBottom: Platform.OS === 'ios' ? '20%' : '10%',
    paddingTop: Platform.OS === 'ios' ? '20%' : '10%',
  },
  pickerItem: {
    color: '#fff',
    textAlign: 'center',
  },
  picker: {
    paddingBottom: 1,
    color: '#fff',
    textAlign: 'center',
    width: 200,
    height: 150,
    alignSelf: 'center',
  },
});

export default InfoForm;

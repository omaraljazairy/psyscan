import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Platform} from 'react-native';
import SimplePicker from '../../components/pickers/SimplePicker';
import Header from '../../components/Headers/Header';
import Bottom from '../../components/Bottoms/Bottom';
import TextFieldLable from '../../components/inputs/TextFieldLable';
import EmptyButton from '../../components/buttons/EmptyButton';
import {
  location_list,
  gender_list,
  occupation_list,
  race_culture_list,
  education_list,
  relationship_status_list,
} from '../../data/data';

// import I18n from '../../../src/services/translations/translation';

class InfoForm extends Component {
  state = {
    gender: null,
    location: null,
    occupation: null,
    race_culture: null,
    education: null,
    relationshipStatus: null,
    showPicker: false,
    pickerName: null,
    pickerData: null,
  };

  togglePicker(pickerName) {
    console.log('toggle pickername: ', pickerName);
    this.setState({showPicker: !this.state.showPicker});
    switch (pickerName) {
      case 'location':
        this.setState({
          pickerName: pickerName,
          pickerData: location_list,
        });
        break;
      case 'gender':
        this.setState({
          pickerName: pickerName,
          pickerData: gender_list,
        });
        break;
      case 'occupation':
        this.setState({
          pickerName: pickerName,
          pickerData: occupation_list,
        });
        break;
      case 'race_culture':
        this.setState({
          pickerName: pickerName,
          pickerData: race_culture_list,
        });
        break;
      case 'education':
        this.setState({
          pickerName: pickerName,
          pickerData: education_list,
        });
        break;
      case 'relationship_status':
        this.setState({
          pickerName: pickerName,
          pickerData: relationship_status_list,
        });
        break;
      default:
        this.setState({
          pickerName: null,
          pickerData: null,
        });
    }
    console.log('pickerData: ', this.state.pickerData);
  }

  onValueChange(value) {
    console.log('onValueChange value city: ', value);
    console.log('this.state.pickerName : ', this.state.pickerName);

    switch (this.state.pickerName) {
      case 'location':
        this.setState({location: value});
        break;
      case 'gender':
        this.setState({gender: value});
        break;
      case 'occupation':
        this.setState({occupation: value});
        break;
      case 'race_culture':
        this.setState({race_culture: value});
        break;
      case 'education':
        this.setState({education: value});
        break;
      case 'relationship_status':
        this.setState({relationshipStatus: value});
        break;
      default:
        return;
    }
    console.log('state before toggle: ', this.state);
    this.togglePicker();
  }

  render() {
    const picker = this.state.showPicker ? (
      <SimplePicker
        onChange={(value) => this.onValueChange(value)}
        pickerData={this.state.pickerData}
      />
    ) : null;

    return (
      <SafeAreaView style={styles.container}>
        <Header text={'preliminary_testing'} />
        <View style={styles.bodyView}>
          {picker}
          <EmptyButton
            text="gender"
            btnSize="large"
            togglePicker={() => this.togglePicker('gender')}
            btnText={this.state.gender}
          />
          <EmptyButton
            text="location"
            btnSize="large"
            togglePicker={() => this.togglePicker('location')}
            btnText={this.state.location}
          />
          <EmptyButton
            text="occupation"
            btnSize="large"
            togglePicker={() => this.togglePicker('occupation')}
            btnText={this.state.occupation}
          />
          <EmptyButton
            text="education"
            btnSize="large"
            togglePicker={() => this.togglePicker('education')}
            btnText={this.state.education}
          />
          <EmptyButton
            text="race_culture"
            btnSize="large"
            togglePicker={() => this.togglePicker('race_culture')}
            btnText={this.state.race_culture}
          />
          <EmptyButton
            text="relationship_status"
            btnSize="large"
            togglePicker={() => this.togglePicker('relationship_status')}
            btnText={this.state.relationshipStatus}
          />
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

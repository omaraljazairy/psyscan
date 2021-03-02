import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet} from 'react-native';

export default class SimplePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
    };
  }

  onValueChange(value) {
    this.setState({
      city: value,
    });
    this.props.onChange(value);
  }

  render() {
    const items = [
      {label: 'Basra', value: 'Basra'},
      {label: 'Zaandam', value: 'Zaandam'},
      {label: 'Almere', value: 'Almere'},
      {label: 'Amsterdam', value: 'Amsterdam'},
    ];
    const pickerItems = items.map((item, index) => (
      <Picker.Item key={index} label={item.label} value={item.value} />
    ));
    return (
      <Picker
        selectedValue={this.state.city}
        onValueChange={(value) => this.onValueChange(value)}
        mode="dropdown"
        style={styles.picker}
        itemStyle={styles.pickerItem}>
        {pickerItems}
        {/* <Picker.Item label="Zaandam" value="Zaandam" />
        <Picker.Item label="Amsterdam" value="Amsterdam" />
        <Picker.Item label="Almere" value="Almere" /> */}
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
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

import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet} from 'react-native';

export default class SimplePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'none',
    };
  }

  onValueChange(value) {
    this.setState({
      city: value,
    });
    this.props.onChange(value);
  }

  onSelectedValue(value) {
    console.log('selected value: ', value);
  }

  render() {
    const pickerItems = this.props.pickerData.map((item, index) => (
      <Picker.Item key={index} label={item.label} value={item.value} />
    ));
    return (
      <Picker
        selectedValue={this.state.value}
        onValueChange={(value) => this.onValueChange(value)}
        mode="dropdown"
        style={styles.picker}
        itemStyle={styles.pickerItem}>
        {pickerItems}
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

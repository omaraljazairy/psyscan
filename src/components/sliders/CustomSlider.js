import React from 'react';
import {Slider} from 'galio-framework';
import {StyleSheet, Platform, View} from 'react-native';
import CONSTANTS from '../../constants/styles';

const CustomSlider = (props) => {
  const defaultValue = props.defaultValue ? props.defaultValue : 1;
  const maxValue = props.maxValue ? props.maxValue : 100;
  const minValue = props.minValue ? props.minValue : 1;
  const stepValue = props.stepValue ? props.stepValue : 1;
  const disabledValue = props.isDisabled ? props.isDisabled : false;

  return (
    <View style={styles.view}>
      <Slider
        maximumValue={maxValue}
        minimumValue={minValue}
        value={defaultValue}
        onValueChange={(value) => props.onValueChange(value)}
        step={stepValue}
        trackStyle={styles.sliderTrack}
        thumbStyle={styles.sliderThumb}
        activeColor={CONSTANTS.COLOR.PURPLE}
        disabled={disabledValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: Platform.OS === 'ios' ? '100%' : '99%',
  },
  sliderTrack: {
    backgroundColor: CONSTANTS.COLOR.EASTERN_BLUE,
    height: 5,
  },
  sliderThumb: {
    backgroundColor: CONSTANTS.COLOR.BRIGHT_TURQUOISE,
    borderColor: CONSTANTS.COLOR.WHITE,
  },
});

export default CustomSlider;

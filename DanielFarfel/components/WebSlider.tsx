import React from 'react';
import { View } from 'react-native';

export default function WebSlider({
  value,
  minimumValue,
  maximumValue,
  step = 1,
  onValueChange,
  style,
}: {
  value: number;
  minimumValue: number;
  maximumValue: number;
  step?: number;
  onValueChange: (val: number) => void;
  style?: any;
}) {
  return (
    <View style={style}>
      <input
        type="range"
        min={minimumValue}
        max={maximumValue}
        step={step}
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
        style={{ width: '100%' }}
      />
    </View>
  );
}

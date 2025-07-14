import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { styles as baseStyles } from '../styles/styles';

interface NumDisplayProps {
  sequence: number[];
  userInput: number[];
  showColor?: boolean;
}

const defaultColor = '#2f3a70';
const correctColor = '#2d9c6b';
const incorrectColor = '#d13a4b';
const inputBackground = '#e4eaf6'; // Slightly darker than your gradient base

export default function NumsDisplay({ sequence, userInput, showColor }: NumDisplayProps) {
  if (userInput.length === 0) {
    return (
      <View style={styled.inputDisplay}>
        {[0].map((_, index) => (
          <View key={index} style={[styled.inputBox, { borderColor: defaultColor }]}>
            <Text style={[styled.inputText, { color: defaultColor }]}>
              {'_'}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={styled.inputDisplay}>
      {userInput.map((e, index) => {
        const digit = sequence[index];
        const hasInput = digit !== undefined;

        let boxColor = defaultColor;

        if (showColor && hasInput) {
          boxColor = digit === e ? correctColor : incorrectColor;
        }

        return (
          <View key={index} style={[styled.inputBox, { borderColor: boxColor }]}>
            <Text style={[styled.inputText, { color: boxColor }]}>
              {e}
            </Text>
          </View>
        );
      })}
    </View>
  );
}


const styled = StyleSheet.create({
  inputDisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    paddingVertical: 10,
  },
  inputBox: {
    width: 55,
    height: 60,
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: inputBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  inputText: {
    fontSize: 28,
    fontWeight: '600',
    fontFamily: Platform.select({ ios: 'Courier', android: 'monospace', default: 'monospace' }),
  },
});

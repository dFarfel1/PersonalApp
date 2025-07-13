import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {styles} from "../styles/styles"

interface NumDisplayProps {
  sequence: number[];
  userInput: number[];
  showColor?: boolean;
}

export default function NumsDisplay({ sequence, userInput, showColor }: NumDisplayProps) {
  return (
    <View style={styles.inputDisplay}>
      {userInput.map((e, index) => {
        const digit = sequence[index];
        const hasInput = digit !== undefined;

        let boxColor = '#ccc'; // default border

        if (showColor && hasInput) {
          boxColor = digit === e ? 'green' : 'red';
        }

        return (
          <View key={index} style={[styles.inputBox, { borderColor: boxColor }]}>
            <Text style={[styles.inputText, { color: boxColor }]}>
              {e}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

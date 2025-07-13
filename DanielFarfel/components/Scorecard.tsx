import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {styles} from "../styles/styles"

interface ScoreProps {
  sequence: number[];
  userInput: number[];
}

const calculateScore = (sequence: number[] , userInput: number[]) => {
    let [score, total, numCorrect, maxStreak, currentStreak] = [0,0,0,0,0] ;
    let accuracy = 0.0;
    for (let i = 0; i < sequence.length; i++) {
      if (userInput[i] === sequence[i]) {
        score += 100;
      } else {
        score -= 50;
      }
    }

    return score
}


export default function Scorecard({ sequence, userInput }: ScoreProps) {

    const score = calculateScore(sequence, userInput)
  return (
    <View style={styles.inputDisplay}>
      <Text> {score}  points</Text>
    </View>
  );
}

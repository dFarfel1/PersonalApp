import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ModalWrapper from "./ModalWrapper";


interface StatProps {
  isVisible: boolean;
  stats: {
    userInput: number[];
    sequence: number[];
  };
  setStats: React.Dispatch<React.SetStateAction<StatProps['stats']>>;
}

const calculateScore = (sequence: number[], userInput: number[]) => {
  let [score, numCorrect, maxStreak, currentStreak] = [0, 0, 0, 0];
  const total = sequence.length;
  let accuracy = 0.0;
  //Working here recalculate score
  for (let i = 0; i < sequence.length; i++) {
    if (userInput[i] === sequence[i]) {
      numCorrect += 1;
      currentStreak += 1;
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  score = 100 * numCorrect - (total - numCorrect) * 50;
  accuracy = numCorrect / total;

  return [score, total, numCorrect, maxStreak, accuracy];
};

export default function Scorecard({ isVisible, stats, setStats}: StatProps) {
  const [score, total, numCorrect, maxStreak, accuracy] = calculateScore(
    stats.sequence,
    stats.userInput
  );

  return (
    <View>
      <Text style={styles.title}>Score Summary</Text>
      <Text style={styles.score}>{score} pts</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Correct:</Text>
        <Text style={styles.value}>
          {numCorrect} / {total}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Max Streak:</Text>
        <Text style={styles.value}>{maxStreak}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Accuracy:</Text>
        <Text style={styles.value}>{(accuracy * 100).toFixed(1)}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  modal: {
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 20,
    padding: 24,
    width: "90%",
    maxWidth: 500,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  closeButton: {
    marginTop: 24,
    alignSelf: "center",
    backgroundColor: "#3b64ff",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  closeText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2f3a70",
    textAlign: "center", /// chekc this
    marginBottom: 16,
    flexShrink: 1, ///chec this
  },
  score: {
    fontSize: 32,
    fontWeight: "800",
    color: "#3b64ff",
    textAlign: "center",
    marginBottom: 20,
    flexShrink: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
    flexWrap: "nowrap", // ✅ prevent wrapping
  },
  label: {
    flexShrink: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#2f3a70",
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2f3a70",
    textAlign: "right",
    flexShrink: 0,
    flexGrow: 0,
  },
});

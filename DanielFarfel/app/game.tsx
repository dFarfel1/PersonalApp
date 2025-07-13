import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import Settings from "../components/Settings";
import Button from "../components/Button";
import Scorecard from "../components/Scorecard";
import NumsDisplay from "../components/NumsDisplay";
import { Link } from "expo-router";
import { createContext, useContext, useState, useEffect } from "react";

export default function ShapesGame() {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({ numItems: 5, displayTime: 1 });

  const [sequence, setSequence] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [displaySequence, setDisplaySequence] = useState<number[]>([]);
  const [showingSequence, setShowingSequence] = useState(false);

  const [userInput, setUserInput] = useState<number[]>([]);
  const [replayIndex, setReplayIndex] = useState<number | null>(null);

  const [gamePhase, setGamePhase] = useState("preGame");

  const startGame = () => {
    setGamePhase("displayingSequence");
    const digits = Array.from({ length: settings.numItems }, () =>
      Math.floor(Math.random() * 10)
    );

    setCurrentIndex(0);
    setSequence(digits);
    setCurrentIndex(0);
    setShowingSequence(true);
    setDisplaySequence([]);
    setUserInput([]);
  };

  

  const handleDigitPress = (digit: number) => {
    setUserInput((prev) => [...prev, digit]);
    if (userInput.length >= sequence.length - 1) {
      setReplayIndex(0);
      setGamePhase("replayingSequence");
    }
  };

  useEffect(() => {
    if (!showingSequence || currentIndex === null) return;

    //i dont think showingsequence is necessary
    if (currentIndex >= sequence.length) {
      const timer = setTimeout(() => {
        setShowingSequence(false);
        setCurrentIndex(null);
        setGamePhase("enteringSequence");
      }, 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev !== null ? prev + 1 : null));
    }, settings.displayTime * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (replayIndex === null) return;

    if (replayIndex >= sequence.length) {
      setReplayIndex(null);
      //setDisplaySequence([])
      setGamePhase("postGame");
    }

    setDisplaySequence(sequence.slice(0, replayIndex + 1));
    const timer = setTimeout(() => {
      setReplayIndex((prev) => (prev !== null ? prev + 1 : null));
    }, settings.displayTime * 1000);

    return () => clearTimeout(timer);
  }, [replayIndex]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Game Screen</Text>

      {(gamePhase === "preGame" || gamePhase === "postGame") && (
        <>
          <Button
            onPress={() => setShowSettings((prev) => !prev)}
            title="Show Settings"
          ></Button>

          <Button onPress={startGame} title="Start Game"></Button>
          {showSettings && (
            <Settings settings={settings} setSettings={setSettings}></Settings>
          )}
        </>
      )}

      {gamePhase === "displayingSequence" && (
        <>
          {showingSequence &&
            currentIndex !== null &&
            currentIndex < sequence.length && (
              <Text>{sequence[currentIndex]}</Text>
            )}
        </>
      )}

      {gamePhase === "enteringSequence" && (
        <>
          <NumsDisplay sequence={sequence} userInput={userInput}></NumsDisplay>
          <Text>Enter the sequence:</Text>
          <View style={styles.keypad}>
            {digitRows.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((num) => (
                  <Button
                    key={num}
                    onPress={() => handleDigitPress(num)}
                    title={num.toString()}
                  ></Button>
                ))}
              </View>
            ))}
          </View>
        </>
      )}

      {(gamePhase === "replayingSequence" || gamePhase === "postGame") && (
        <View style={{ alignItems: "flex-start" }}>
          <NumsDisplay
            sequence={displaySequence}
            userInput={userInput}
            showColor={true}
          />
          <NumsDisplay
            sequence={userInput}
            userInput={displaySequence}
            showColor={true}
          />
        </View>
      )}

      {gamePhase === "postGame" && (
        <View>
          <Scorecard sequence={sequence} userInput={userInput}></Scorecard>
        </View>
      )}
    </View>
  );
}

const digitRows = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]];

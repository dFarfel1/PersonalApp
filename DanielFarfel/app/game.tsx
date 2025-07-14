import { Modal, Text, View } from "react-native";
import { styles } from "../styles/styles";
import Settings from "../components/Settings";
import Button from "../components/Button";
import Scorecard from "../components/Scorecard";
import NumsDisplay from "../components/NumsDisplay";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../components/Background";
import { createContext, useContext, useState, useEffect } from "react";
import ModalWrapper from "../components/ModalWrapper";

export default function ShapesGame() {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({ numItems: 5, displayTime: 1 });
  const [showScorecard, setShowScorecard] = useState(true);

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
    setShowSettings(false);
    setShowScorecard(true)
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
    <Background>
      <View style={styles.container}>
        {(gamePhase === "preGame" || gamePhase === "postGame") && (
          <>
            <Button
              onPress={() => setShowSettings((prev) => !prev)}
              title="Settings"
            ></Button>

            <Button onPress={startGame} title="Start Game"></Button>
            {showSettings && (
              <ModalWrapper
                isVisible={true}
                onClose={() => setShowSettings(false)}
              >
                
                <Settings
                  isVisible={showSettings}
                  settings={settings}
                  setSettings={setSettings}
                />
              </ModalWrapper>

              //<Settings isVisible={true} settings={settings} setSettings={setSettings}></Settings>
            )}
          </>
        )}

        {gamePhase === "postGame" && (
          <Button
              onPress={() => setShowScorecard((prev) => !prev)}
              title="Show Scorecard"
            ></Button>
        )}

        {gamePhase === "displayingSequence" && (
          <>
            {showingSequence &&
              currentIndex !== null &&
              currentIndex < sequence.length && (
                <Text style={styles.sequenceText}>
                  {sequence[currentIndex]}
                </Text>
              )}
          </>
        )}

        {gamePhase === "enteringSequence" && (
          <>
            <NumsDisplay
              sequence={sequence}
              userInput={userInput}
            ></NumsDisplay>
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
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{ alignItems: "flex-start", justifyContent: "center" }}
            >
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
          </View>
        )}

        {gamePhase === "postGame" && (
          <>
            {showScorecard && (
                
                <ModalWrapper
                  onClose={() => setShowScorecard(false)}
                  isVisible={true}
                >
              
                  <Scorecard
                    isVisible={showScorecard}
                    stats={{userInput: userInput, sequence: sequence}}
                    setStats={() => 5}
                  ></Scorecard>
                  
                </ModalWrapper>
            )}
          </>
        )}
      </View>
    </Background>
  );
}



const digitRows = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
];

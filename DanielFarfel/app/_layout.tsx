import { Stack } from "expo-router";
import Header from "../components/Header";
import Background from "../components/Background";

export default function RootLayout() {
  return (
    <Background>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => (
              <Header
                title="Home"
                backgroundColor={["#c1cee4", "#a0b9e3", "#6f8cdb"]}
              />
            ),
          }}
        />
        <Stack.Screen
          name="game"
          options={{
            header: () => (
              <Header
                title="Memorization Game"
                backgroundColor={["#6f8cdb", "#4f66c1", "#2e3c80"]}
              />
            ), // replace default header
          }}
        />
        <Stack.Screen
          name="leaderboard"
          options={{
            header: () => (
              <Header
                title="Leaderboard"
                backgroundColor={["#fcd043", "#ff9d00", "#ff6f61"]}
              />
            ), // replace default header
          }}
        />
      </Stack>
    </Background>
  );
}

import { Stack } from "expo-router";
import Header from "../components/Header"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="game"
        options={{
          header: () => <Header />, // replace default header
        }}
      />
    </Stack>
  );
}

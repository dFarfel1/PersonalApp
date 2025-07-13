import React, { useState } from "react";
import { Stack, router, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Add this import
import Button from "./Button";
import {
  View,
  Text,
  ScrollView,
  Switch,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import NativeSlider from "@react-native-community/slider";
import WebSlider from "./WebSlider";

interface SettingsProps {
  settings: {
    numItems: number;
    displayTime: number;
  };
  setSettings: React.Dispatch<React.SetStateAction<SettingsProps["settings"]>>;
}

// Use the right slider depending on the platform
const Slider = Platform.OS === "web" ? WebSlider : NativeSlider;

export default function Settings({ settings, setSettings }: SettingsProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <Text style={styles.subheader}>Number of Items: {settings.numItems}</Text>
      <Slider
        minimumValue={2}
        maximumValue={10}
        step={1}
        value={settings.numItems}
        onValueChange={(value) =>
          setSettings((prev) => ({
            ...prev,
            numItems: value,
          }))
        }
        style={styles.slider}
      />
      <Text style={styles.subheader}>
        Display Time: {settings.displayTime.toFixed(1)} sec
      </Text>
      <Slider
        minimumValue={0.5}
        maximumValue={2}
        step={0.1}
        value={settings.displayTime}
        onValueChange={(value) =>
          setSettings((prev) => ({
            ...prev,
            displayTime: value,
          }))
        }
        style={styles.slider}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  slider: {
    width: "100%",
    height: 40,
  },
});

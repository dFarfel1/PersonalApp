import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import NativeSlider from '@react-native-community/slider';
import WebSlider from './WebSlider';
import Button from "../components/Button"
import ModalWrapper from './ModalWrapper';

const Slider = Platform.OS === 'web' ? WebSlider : NativeSlider;

interface SettingsProps {
  isVisible: boolean;
  settings: {
    numItems: number;
    displayTime: number;
  };
  setSettings: React.Dispatch<React.SetStateAction<SettingsProps['settings']>>;
}




export default function Settings({ isVisible, settings, setSettings }: SettingsProps) {
  return (
    <View >
      <Text style={styles.header}>Settings</Text>

      <Text style={styles.subheader}>Number of Items: {settings.numItems}</Text>
      <Slider
        minimumValue={2}
        maximumValue={10}
        step={1}
        value={settings.numItems}
        onValueChange={(value) =>
          setSettings((prev) => ({ ...prev, numItems: value }))
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
          setSettings((prev) => ({ ...prev, displayTime: value }))
        }
        style={styles.slider}
      />

      
    </View>
  );
}



 

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  modal: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 20,
    padding: 24,
    width: '90%',
    maxWidth: 500,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  closeButton: {
    marginTop: 24,
    alignSelf: 'center',
    backgroundColor: '#3b64ff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  closeText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

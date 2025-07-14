// components/ModalWrapper.tsx

import React, { ReactNode } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import Button from "../components/Button"
interface ModalWrapperProps {
  isVisible: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function ModalWrapper({ isVisible, children, onClose }: ModalWrapperProps) {
  if (!isVisible) return null;

  return (
    <View style={styles.overlay}>
      <BlurView intensity={40} tint="light" style={StyleSheet.absoluteFill} />
      <View style={styles.modal}>
        {children}
        <Button onPress={onClose} title="Close" />
      </View>
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
    //.width: '90%',
    maxWidth: 500,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
});

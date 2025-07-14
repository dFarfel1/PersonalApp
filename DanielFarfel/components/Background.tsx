import React, { ReactNode } from 'react';
import { View, StyleSheet, Platform, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type BackgroundProps = {
  children?: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <View style={styles.container}>
      {/* Soft Tech Gradient */}
      <LinearGradient
        colors={['#c1cee4', '#a0b9e3', '#6f8cdb']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />

      {/* Optional subtle grain (for texture) */}
      {Platform.OS === 'web' ? (
        <View style={styles.noiseOverlay} pointerEvents="none" />
      ) : (
        <ImageBackground
          source={require('../assets/images/noise-light.png')}
          resizeMode="repeat"
          style={StyleSheet.absoluteFill}
          imageStyle={{ opacity: 0.04 }}
          //pointerEvents="none"
        />
      )}

      {/* Foreground Content */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  noiseOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-light.png)',
    opacity: 0.04,
  },
});

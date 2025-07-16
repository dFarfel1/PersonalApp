import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useHover } from 'react-native-web-hooks';

interface HeaderProps {
    title: string,
    backgroundColor: [string, string] | [string, string, ...string[]];
}

export default function Header({title, backgroundColor}: HeaderProps) {
  const [pressed, setPressed] = useState(false);
  const isWeb = Platform.OS === 'web';

  return (
    <LinearGradient
      colors={backgroundColor as [string, string]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Pressable
        onPress={() => {}}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        style={({ hovered }) => [
          styles.pressable,
          pressed && styles.pressed,
          hovered && isWeb && styles.hovered,
        ]}
      >
        <View style={styles.inner}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 10,
  },
  inner: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.15)', // matte-glass feel
    backdropFilter: 'blur(8px)', // for web
  },
  pressable: {
    transform: [{ scale: 1 }],
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
  hovered: {
    transform: [{ scale: 1.05 }],
  },
  text: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 1.5,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});

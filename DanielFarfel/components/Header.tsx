// components/StyledHeader.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useHover } from 'react-native-web-hooks';

export default function Header() {
  const [pressed, setPressed] = useState(false);
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.container}>
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
        <LinearGradient
          colors={['#FF6FD8', '#3813C2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.text}>Memorization Game</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 10,
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
  gradient: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
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

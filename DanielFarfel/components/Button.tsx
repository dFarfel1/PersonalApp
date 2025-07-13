import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
  onPress: () => void;
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

function Button({
  onPress,
  title,
  icon,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}>
      {icon && <Ionicons name={icon} size={20} color="#fff" style={styles.icon} />}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  icon: {
    marginRight: 8,
  },
});

export default Button;

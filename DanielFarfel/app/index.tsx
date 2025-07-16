import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { Link } from 'expo-router';
import Background from '../components/Background';
import Button from '../components/Button';
import { styles } from '../styles/styles';

export default function Home() {
  return (
    <Background>
      <ScrollView contentContainerStyle={screenStyles.container}>
        <Text style={styles.name}>Daniel Farfel</Text>

        {/* 🔹 About Me */}
        <View style={[screenStyles.section, screenStyles.about]}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.text}>
            This is my website. Please check out my memorization game or any of my other links.
          </Text>
        </View>

        {/* 🔹 Projects */}
        <View style={[screenStyles.section, screenStyles.projects]}>
          <Text style={styles.sectionTitle}>Links</Text>

          <Link href="./leaderboard" asChild>
            <Button title="🧠 Memory Game" onPress={() => {}} />
          </Link>

          <Button
            title="💻 GitHub"
            onPress={() => Linking.openURL('https://github.com/dFarfel1')}
          />

          <Button
            title="🔗 LinkedIn"
            onPress={() => Linking.openURL('https://www.linkedin.com/in/daniel-farfel')}
          />
        </View>

        {/* 🔹 Contact */}
        <View style={[screenStyles.section, screenStyles.contact]}>
          <Text style={styles.sectionTitle}>Contact</Text>

          <Button
            title="📧 dfarfel@gmail.com"
            onPress={() => Linking.openURL('mailto:dfarfel@gmail.com')}
          />

          <Button
            title="📸 @danielfarfel"
            onPress={() => Linking.openURL('https://www.instagram.com/danielfarfel')}
          />
        </View>
      </ScrollView>
    </Background>
  );
}



export const screenStyles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 40,
  },
  section: {
    width: '100%',
    maxWidth: 500,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  about: {
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  projects: {
    backgroundColor: 'rgba(245,245,255,0.92)',
    borderWidth: 1,
    borderColor: '#d0dcff',
  },
  contact: {
    backgroundColor: 'rgba(255, 250, 245, 0.9)',
  
  },
});

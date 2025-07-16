import React from 'react';
import { View, Text, FlatList, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Background from '../components/Background'

interface ScoreEntry {
  id: string;
  name: string;     // 3-letter tag or instagram
  score: number;
  date: string;     // timestamp string
  instagram?: string;
}

const scores: ScoreEntry[] = [
  {
    id: '1',
    name: 'TopDog',
    score: 420,
    date: '2025-07-14 10:00',
    instagram: '@topdog123',
  },
  { id: '2', name: 'JDW', score: 390, date: '2025-07-13 18:20' },
  { id: '3', name: 'MRC', score: 380, date: '2025-07-13 13:10' },
  { id: '4', name: 'LOP', score: 360, date: '2025-07-12 21:00' },
  { id: '5', name: 'XYZ', score: 350, date: '2025-07-11 15:44' },
];

export default function Leaderboard() {
  const top1 = scores[0];
  const rest = scores.slice(1);

  return (
    <Background>
    <View style={styles.container}>
      {/* 🥇 Top 1 */}
      <LinearGradient
        colors={['#ffd700', '#fcd043']}
        style={styles.topCard}
      >
        <Text style={styles.topTitle}>🥇 {top1.instagram || top1.name}</Text>
        <Text style={styles.topScore}>{top1.score} pts</Text>
        <Text style={styles.date}>{top1.date}</Text>
      </LinearGradient>

      {/* 🏅 List of 2–5 */}
      <FlatList
        data={rest}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.rank}>#{index + 2}</Text>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
    </Background>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  topCard: {
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  topTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  topScore: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
  list: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  rank: {
    fontSize: 18,
    fontWeight: '700',
    width: 30,
    color: '#444',
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  score: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3b64ff',
  },
});

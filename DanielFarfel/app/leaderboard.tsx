import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Linking,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Background from '../components/Background';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';

interface ScoreEntry {
  id: string;
  name: string;
  score: number;
  date: string;
  instagram?: string;
}

function useLeaderboard() {
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5206/api/leaderboard')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch leaderboard');
        return res.json();
      })
      .then((data) => {
        setScores(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { scores, loading, error };
}

export default function Leaderboard() {
  const router = useRouter();
  const { scores, loading, error } = useLeaderboard();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  if (!scores.length) return <Text>No scores yet!</Text>;

  const top1 = scores[0];
  const rest = scores.slice(1);

  const handleInstagramPress = () => {
    if (top1.instagram?.startsWith('@')) {
      const handle = top1.instagram.slice(1);
      Linking.openURL(`https://instagram.com/${handle}`);
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        {/* 🥇 Top 1 */}
        <LinearGradient colors={['#ffd700', '#fcd043']} style={styles.topCard}>
          {top1.instagram && (
  <Pressable onPress={handleInstagramPress} style={styles.profileWrapper}>
    <Image
      source={{ uri: `https://scontent-bos5-1.cdninstagram.com/v/t51.2885-19/457121220_373074642508023_3445089444442549069_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-bos5-1.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QE43Y2LvZzxT99kcNkxSW8_a2t48_oJbsU7jaiTM8Cy9LmrZBOfvyxMFcsYr9VzRtu4tSoKA6seQA2qJUeVEbyU&_nc_ohc=XpJBBhvwdqMQ7kNvwFvRtPK&_nc_gid=aLOLBkdpIv3bgoLuT9We8Q&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfQPfmut2ZIbAFNtm8RO99FBKI--kGP3gu3vfIAUPWV5Jg&oe=687DCF50&_nc_sid=8b3546`}}
      style={styles.profileImage}
       resizeMode="cover"
    />
    <Text style={[styles.topTitle]}>{top1.instagram}</Text>
  </Pressable>
)}
{!top1.instagram && (
  <Text style={styles.topTitle}>🥇 {top1.name}</Text>
)}
          <Text style={styles.topScore}>{top1.score} pts</Text>
          <Text style={styles.date}>{top1.date}</Text>
        </LinearGradient>

        {/* 🏅 2–5 */}
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

        {/* 🚀 Go to Game */}
        <Button
          title="Play Game"
          onPress={() => router.push('/game')}
          style={styles.playButton}
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
  playButton: {
    marginTop: 20,
    alignSelf: 'center',
  },  profileWrapper: {
    alignItems: 'center',
    gap: 8,
  },
  profileImage: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 4,
  },

});

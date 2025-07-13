import { Text, View } from "react-native";
import {styles} from "../styles/styles";
import {Link} from 'expo-router';

export default function ShapesGame() {
  return (
    <View style={styles.container}>
      <Link href="./game">
        <Text style={{ color: 'blue', marginTop: 20 }}>
          Go to Game
        </Text>
      </Link>
    </View>
  );
}

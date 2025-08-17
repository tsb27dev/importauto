import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Text style={{ fontSize: 24 }}>🚗 ImportAuto</Text>
      <Link href="/cars" asChild>
        <Pressable style={{ padding: 12, backgroundColor: '#333', borderRadius: 8 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Ver lista de carros</Text>
        </Pressable>
      </Link>
    </View>
  );
}

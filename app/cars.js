import { View, Text, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

// se estiveres no telemóvel/emulador, troca pelo IP do teu PC, ex.:  http://192.168.1.50:4000
const BASE_URL = Platform.OS === "web" ? "http://localhost:4000" : "http://192.168.1.50:4000";

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/cars`)
      .then(r => r.json())
      .then(setCars)
      .catch(() => setCars([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><Text>A carregar…</Text></View>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>Lista de carros</Text>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <Link href={`/car/${item.id}`} asChild>
            <Pressable style={{ padding: 12, borderRadius: 8, borderWidth: 1, borderColor: "#ddd" }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.make} {item.model} ({item.year})
              </Text>
              <Text>{item.price} € · {item.country}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Pressable, Platform } from "react-native";
import { useEffect, useState } from "react";

const BASE_URL = Platform.OS === "web" ? "http://localhost:4000" : "http://192.168.1.50:4000";

export default function CarDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/cars/${id}`)
      .then(r => r.ok ? r.json() : null)
      .then(setCar)
      .catch(() => setCar(null));
  }, [id]);

  if (!car) {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Carro não encontrado.</Text>
        <Pressable onPress={() => router.back()}><Text>← Voltar</Text></Pressable>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Pressable onPress={() => router.back()}><Text style={{ marginBottom: 10 }}>← Voltar</Text></Pressable>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{car.make} {car.model}</Text>
      <Text>Ano: {car.year}</Text>
      <Text>Preço: {car.price} €</Text>
      <Text>País: {car.country}</Text>
    </View>
  );
}

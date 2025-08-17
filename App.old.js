import { useState } from "react";
import { SafeAreaView, View, Text, FlatList, Pressable } from "react-native";

const CARS = [
  { id: "1", make: "BMW", model: "320d", year: 2018, price: 18500, country: "DE" },
  { id: "2", make: "Audi", model: "A3", year: 2019, price: 17900, country: "FR" },
  { id: "3", make: "VW", model: "Golf 1.5 TSI", year: 2020, price: 19900, country: "ES" },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <Pressable onPress={() => setSelected(null)}>
          <Text style={{ fontSize: 16, marginBottom: 12 }}>← Voltar</Text>
        </Pressable>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {selected.make} {selected.model}
        </Text>
        <Text style={{ marginTop: 8 }}>Ano: {selected.year}</Text>
        <Text>Preço: {selected.price} €</Text>
        <Text>País: {selected.country}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        ImportAuto (local)
      </Text>
      <FlatList
        data={CARS}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setSelected(item)}
            style={{
              padding: 12,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#ddd",
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {item.make} {item.model}
            </Text>
            <Text>{item.year} · {item.country} · {item.price} €</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

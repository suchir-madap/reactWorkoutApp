import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import excercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";

export default function ExcerciseDetailsScreen() {
  const params = useLocalSearchParams();
  const excercise = excercises.find((item) => item.name == params.name);

  if (!excercise) {
    return <Text>Excercise not found.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: excercise.name }} />

      <View style={styles.panel}>
        <Text style={styles.excerciseName}>{excercise.name}</Text>

        <Text style={styles.excerciseSubtitle}>
          <Text style={styles.subValue}>{excercise.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{excercise.equipment}</Text>
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.instructions}>{excercise.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  excerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  excerciseSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
});

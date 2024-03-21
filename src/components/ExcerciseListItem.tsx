import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function ExcerciseListItem({ item }) {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.excerciseContainer}>
        <Text style={styles.excerciseName}>{item.name}</Text>
        <Text style={styles.excerciseSubtitle}>
          <Text style={styles.subValue}>{item.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{item.equipment}</Text>
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  excerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 2,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
});

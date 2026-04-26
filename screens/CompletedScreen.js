import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ExerciseContext } from "../context/ExerciseContext";

export default function CompletedScreen() {
  const { exercises } = useContext(ExerciseContext);

  const completedExercises = exercises.filter(e => e.completed);

  return (
    <View style={styles.container}>
      {completedExercises.length === 0 ? (
        <Text>No completed exercises yet</Text>
      ) : (
        <FlatList
          data={completedExercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>✅ {item.name}</Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { fontSize: 18, marginBottom: 10 },
});
import React, { useContext } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { ExerciseContext } from "../context/ExerciseContext";

export default function DetailScreen({ route }) {
  const { exercise } = route.params;

  const { toggleComplete, exercises } = useContext(ExerciseContext);

  const currentExercise = exercises.find((e) => e.id === exercise.id);

  return (
    <View
      style={[
        styles.container,
        currentExercise.completed && styles.completedBg,
      ]}
    >
      <Image source={{ uri: currentExercise.image }} style={styles.image} />

      <Text style={styles.title}>{currentExercise.name}</Text>
      <Text>{currentExercise.description}</Text>

      <Button
        title={
          currentExercise.completed
            ? "Mark as Incomplete"
            : "Mark as Completed"
        }
        color={currentExercise.completed ? "#e11d48" : "#22c55e"} // 🔥 button color change
        onPress={() => toggleComplete(currentExercise.id)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  title: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: "bold",
  },
});
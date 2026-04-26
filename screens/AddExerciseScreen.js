import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { ExerciseContext } from "../context/ExerciseContext";

export default function AddExerciseScreen({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const { addExercise } = useContext(ExerciseContext);

  const handleSubmit = () => {
    if (!name.trim() || !description.trim()) {
      Alert.alert("Error", "Name and Description are required");
      return;
    }

    const newExercise = {
      name: name.trim(),
      description: description.trim(),
      category: category.trim() || "General",
      image:
        image.trim() ||
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Exercise",
    };

    addExercise(newExercise);

    setName("");
    setDescription("");
    setImage("");
    setCategory("");

    Alert.alert("Success", "Exercise added successfully!");

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Exercise Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <TextInput
        placeholder="Category (e.g. Cardio, Strength)"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />

      <TextInput
        placeholder="Image URL (optional)"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />

      <Button title="Add Exercise" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
});
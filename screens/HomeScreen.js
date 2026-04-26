import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ExerciseContext } from "../context/ExerciseContext";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { exercises } = useContext(ExerciseContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate("Detail", { exercise: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.title} numberOfLines={1}>
          {item.name}
        </Text>
        {item.completed && (
          <Ionicons name="checkmark-circle" size={20} color="#22c55e" />
        )}
      </View>

      <Text style={styles.category}>
        {item.category ? item.category : "General"}
      </Text>

      <Text style={styles.desc} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Fitness Tracker</Text>
        <Text style={styles.subHeading}>Track your daily workouts</Text>
      </View>

      {/* Top Buttons */}
      <View style={styles.topButtons}>
        <TouchableOpacity
          style={[styles.smallBtn, styles.blue]}
          onPress={() => navigation.navigate("Completed")}
        >
          <Ionicons name="checkmark-done" size={18} color="#fff" />
          <Text style={styles.btnText}>Completed</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={[styles.smallBtn, styles.purple]}
          onPress={() => navigation.navigate("Quotes")}
        >
          <Ionicons name="flash" size={18} color="#fff" />
          <Text style={styles.btnText}>Motivation</Text>
        </TouchableOpacity> */}
      </View>

      {/* List / Empty State */}
      {exercises.length === 0 ? (
        <View style={styles.emptyBox}>
          <Ionicons name="barbell-outline" size={50} color="#aaa" />
          <Text style={styles.emptyText}>No exercises yet</Text>
          <Text style={styles.emptySub}>
            Tap + button to add your first exercise
          </Text>
        </View>
      ) : (
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("Add")}
        activeOpacity={0.9}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  header: {
    marginBottom: 12,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  subHeading: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  smallBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },

  blue: {
    backgroundColor: "#4f46e5",
  },

  purple: {
    backgroundColor: "#7c3aed",
  },

  btnText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  category: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },

  desc: {
    fontSize: 13,
    color: "#444",
    marginTop: 6,
  },

  emptyBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },

  emptySub: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#22c55e",
    width: 62,
    height: 62,
    borderRadius: 31,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
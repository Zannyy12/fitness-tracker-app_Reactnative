import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import AddExerciseScreen from "./screens/AddExerciseScreen";
import { ExerciseProvider } from "./context/ExerciseContext";
import CompletedScreen from "./screens/CompletedScreen";
import QuotesScreen from "./screens/QuotesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ExerciseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Add" component={AddExerciseScreen} />
          <Stack.Screen name="Completed" component={CompletedScreen} />
          <Stack.Screen name="Quotes" component={QuotesScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </ExerciseProvider>
  );
}
import React, { createContext, useState } from "react";

export const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
  // ✅ Default exercises (shown when app opens)
  const [exercises, setExercises] = useState([
    
    {
      id: "1",
      name: "Push Ups",
      description:
        "A bodyweight exercise that strengthens chest, shoulders, and arms.",
      category: "Strength",
      image: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Push-Up.gif",
      completed: false,
    },
    {
      id: "2",
      name: "Squats",
      description: "Great for legs and lower body strength.",
      category: "Strength",
      image: "https://training.fit/wp-content/uploads/2020/03/kniebeugen-langhantel.png",
      completed: false,
    },
    {
      id: "3",
      name: "Jumping Jacks",
      description: "Full body cardio exercise to improve stamina.",
      category: "Cardio",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGIrXkjdMsDaa4UT95VusodHACrJyUPKZDA&s",
      completed: false,
    },
    {
      id: "4",
      name: "Plank",
      description: "Core strengthening exercise to build stability.",
      category: "Core",
      image: "https://fitnessprogramer.com/wp-content/uploads/2021/02/plank.gif",
      completed: false,
    },
  ]);

 const addExercise = (exercise) => {
  setExercises((prev) => [
    ...prev,
    {
      ...exercise,
      id: Date.now().toString(),
      completed: false,
    },
  ]);
};
  // ✅ Toggle completed status
  const toggleComplete = (id) => {
    setExercises((prev) =>
      prev.map((ex) =>
        ex.id === id ? { ...ex, completed: !ex.completed } : ex
      )
    );
  };

  return (
    <ExerciseContext.Provider
      value={{ exercises, addExercise, toggleComplete }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};
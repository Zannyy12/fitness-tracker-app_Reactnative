# Fitness Tracker App

A complete fitness tracking application built with React Native and Expo. This app allows users to manage their daily workouts, track completed exercises, and stay motivated.

## 🚀 Features

* **Home:** View your active exercise list.
* **Add Exercise:** Easily add new workouts to your routine.
* **Completed:** Keep track of the exercises you have finished.
* **Details:** View specific information about individual exercises.
* **Quotes:** Get daily motivation.

## 🛠️ Tech Stack

* **Framework:** React Native / Expo
* **State Management:** React Context API
* **Navigation:** React Navigation
* **Build Tool:** EAS (Expo Application Services)

## 📱 How to Run Locally

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the Expo server:**
    ```bash
    npm start
    ```

## 📦 Download Android App

A pre-built Android APK is available in the **`Build`** folder (`Build/fitness_tracker_app.apk`). You can download this file directly to your Android device to install and test the app without setting up a development environment.
```

## 📂 Project Structure

```text
FITNESS_TRACKER_APP/
├── assets/          # App icons, splash screens, and images
├── Build/           # Contains the generated Android build (fitness_tracker_app.apk)
├── context/         # Context API files for global state management
├── screens/         # UI screens (Home, Add, Completed, Detail, Quotes)
├── App.js           # Main application entry point
├── app.json         # Expo configuration
├── eas.json         # EAS build configuration
└── package.json     # Project dependencies


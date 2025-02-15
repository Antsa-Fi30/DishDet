import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

//Routes Navigation
import StackRoutes from "./app/routes/StackRoutes";

//Expo fonts
import { useFonts } from "expo-font";

//Theme:
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import { FlatUITheme, DarkFlatUITheme } from "./app/utils/theme"; // Importer les thèmes

//Auth Contexte
import { AuthProvider } from "./app/context/authContext";

import axios from "axios";

const App = () => {
  const [loaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });
  const [isFirstTime, setIsFirstTime] = useState(false);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <PaperProvider theme={MD3DarkTheme}>
        <StackRoutes theme={DarkFlatUITheme} />
      </PaperProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({});

export default App;

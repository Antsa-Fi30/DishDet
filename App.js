import React, { useState } from "react";
import { StyleSheet } from "react-native";

//Routes Navigation
import StackRoutes from "./app/routes/StackRoutes";

//Expo fonts
import { useFonts } from "expo-font";

import { PaperProvider, MD3LightTheme, MD3DarkTheme } from "react-native-paper";

import { FlatUITheme, DarkFlatUITheme } from "./app/utils/theme"; // Importer les thèmes

const App = () => {
  const [loaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <PaperProvider theme={MD3DarkTheme}>
      <StackRoutes theme={DarkFlatUITheme} />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;

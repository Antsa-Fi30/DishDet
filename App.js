//React
import { useCallback, useState, useMemo, useEffect } from "react";
import { SafeAreaView } from "react-native";

//React navigation
import { NavigationContainer } from "@react-navigation/native";
//React native paper and it's Theming
import { Provider as PaperProvider } from "react-native-paper";

//Expo
import { useFonts } from "expo-font";

//Theme of the app
import { lightTheme, darkTheme } from "./app/utils/Theme";

//Theme context
import { ThemeContext } from "./app/context/ThemeContext";

//language
import "./app/lang/i18n";
import i18next from "i18next";

//Save configuration(s)
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppRoutes from "./app/routes/AppRoutes";

//Function loading languages
const loadLang = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem("LANGUAGE");
    console.log(storedLanguage);
    if (storedLanguage) {
      i18next.changeLanguage(storedLanguage);
    }
  } catch (err) {
    alert("Error at fetching languages because : " + err);
  }
};

//Components exported
export default function App() {
  // Loading customized fonts
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  //Using context theme
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? darkTheme : lightTheme; //Mamadibadika an le theme

  const toggleTheme = useCallback(() => {
    const newTheme = !isThemeDark;
    AsyncStorage.setItem("isThemeDark", JSON.stringify(newTheme))
      .then(() => {
        setIsThemeDark(newTheme);
      })
      .catch((err) => {
        console.log("Error caused by : " + err);
      });
  }, [isThemeDark]);

  //Storing items
  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  //Last theme applied appear first when app is started
  useEffect(() => {
    AsyncStorage.getItem("isThemeDark")
      .then((theme) => {
        if (theme !== null) {
          setIsThemeDark(JSON.parse(theme)); //Selon ce qui etait configurer depuis la dernier valeur du mode Sombre (true or false)
        }
      })
      .catch((err) => {
        console.log("Theme not gotten because : " + err);
      });
    loadLang(); //Loading language in launch
  }, [loadLang]);

  return (
    <ThemeContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <AppRoutes />
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

//Components
import AppTopBar from "../components/AppTopBar";
import Routes from "../routes/Routes";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import SuggestionDetails from "../screens/SuggestionDetailsScreen/SuggestionDetails";
import SettingsDetailsScreen from "../screens/SettingsDetailsScreen/SettingsDetailsScreen";

//Languages
import { useTranslation } from "react-i18next";

//React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Function creating Navigation:
const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => false,
      }}
    >
      <Stack.Screen name="Dish Detective" component={Routes} />
      <Stack.Screen
        name={"Suggestion details"}
        screenOptions={{
          presentation: "modal",
        }}
        component={SuggestionDetails}
      />
      <Stack.Screen name={t("setting.appbar")} component={SettingsScreen} />
      <Stack.Screen name="Settings details" component={SettingsDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;

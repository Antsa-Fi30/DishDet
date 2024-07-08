//Components
import Routes from "../routes/Routes";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import SettingsDetailsScreen from "../screens/SettingsDetailsScreen/SettingsDetailsScreen";

//Languages
import { useTranslation } from "react-i18next";

//React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestoDetailsScreen from "../screens/RestoDetailsScreen/RestoDetailsScreen";
import PlaceSaved from "../screens/HomeScreen/PlaceSaved";

//Function creating Navigation:
const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          header: () => false,
        }}
      >
        <Stack.Screen name="Dish Detective" component={Routes} />
        <Stack.Screen
          name="Settings details"
          component={SettingsDetailsScreen}
        />
        <Stack.Screen name="Restos details" component={RestoDetailsScreen} />
        <Stack.Screen name="Favorites" component={PlaceSaved} />
      </Stack.Navigator>
    </>
  );
};

export default AppRoutes;

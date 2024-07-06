//Components
import Routes from "../routes/Routes";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import SettingsDetailsScreen from "../screens/SettingsDetailsScreen/SettingsDetailsScreen";

//Languages
import { useTranslation } from "react-i18next";

//React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Function creating Navigation:
const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const { t } = useTranslation();

  const Header = ({ route }) => {
    return route.name !== "Dish Detective";
  };

  return (
    <>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          header: () => <Header route={route} />,
        })}
      >
        <Stack.Screen name="Dish Detective" component={Routes} />
        <Stack.Screen
          name="Settings details"
          component={SettingsDetailsScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default AppRoutes;

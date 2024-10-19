import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./Routes";
import SearchScreen from "../screens/HomeScreen/SearchScreen";
import HeaderSearch from "../components/SearchScreen/HeaderSearch";
import RestosListHeader from "../components/Restos/RestosListHeader";
import RestoListScreen from "../screens/RestosScreen/RestoListScreen";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="App"
          component={Routes}
        />
        <Stack.Screen
          options={{ header: () => <HeaderSearch /> }}
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          options={{ header: () => <RestosListHeader /> }}
          name="Restaurant List"
          component={RestoListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;

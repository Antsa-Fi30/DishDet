import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./Routes";

//Search page:
import SearchScreen from "../screens/HomeScreen/SearchScreen";
import HeaderSearch from "../components/SearchScreen/HeaderSearch";

//Resto's list page:
import RestosListHeader from "../components/Restos/RestosListHeader";
import RestoListScreen from "../screens/RestosScreen/RestoListScreen";

//Restaurant's Details page:
import RestoDetailsScreen from "../screens/RestosScreen/RestoDetailsScreen";

//Notification page:
import NotificationHeader from "../components/NotificationScreen/NotificationHeader";
import NotificationScreen from "../screens/NotificationScreen/NotificationScreen";

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
          options={{ header: () => <NotificationHeader /> }}
          name="Notification"
          component={NotificationScreen}
        />
        <Stack.Screen
          options={{ header: () => <RestosListHeader /> }}
          name="Restaurant List"
          component={RestoListScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Restaurant details"
          component={RestoDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;

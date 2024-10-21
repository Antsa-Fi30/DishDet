import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages:
//Home Page
import Routes from "./Routes";
//Search page:
import SearchScreen from "../screens/HomeScreen/SearchScreen";

//Resto's list page:
import RestoListScreen from "../screens/RestosScreen/RestoListScreen";

//Restaurant's Details page:
import RestoDetailsScreen from "../screens/RestosScreen/RestoDetailsScreen";

//Notification page:
import NotificationScreen from "../screens/NotificationScreen/NotificationScreen";
import HeaderPage from "../components/templates/HeaderPage";

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
          options={{ header: () => <HeaderPage title={"Search"} /> }}
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          options={{ header: () => <HeaderPage title={"Notification"} /> }}
          name="Notification"
          component={NotificationScreen}
        />
        <Stack.Screen
          options={{ header: () => <HeaderPage title={"Restaurant List"} /> }}
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

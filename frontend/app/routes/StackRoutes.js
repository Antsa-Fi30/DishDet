import { useState, useEffect } from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Pages:

//Welcome
import Welcome from "../screens/shared/Welcome";

//Login and signin
import Login from "../screens/shared/Login";
import Signin from "../screens/shared/Signin";

//Home Page
import Routes from "./Routes";

//Message Page:
import MessageScreen from "../screens/ChatScreen/MessageScreen";

//Search page:
import SearchScreen from "../screens/HomeScreen/SearchScreen";

//Resto's list page:
import RestoListScreen from "../screens/RestosScreen/RestoListScreen";

//Restaurant's Details page:
import RestoDetailsScreen from "../screens/RestosScreen/RestoDetailsScreen";

//Notification page:
import HeaderPage from "../components/templates/HeaderPage";
import NotificationsScreen from "../screens/NotificationScreen/NotificationsScreen";
import MessageHeader from "../components/ChatScreen/MessageHeader";
import NotificationDetailsScreen from "../screens/NotificationScreen/NotificationDetailsScreen";
import NotificationDetailsHeader from "../components/NotificationScreen/NotificationDetailsHeader";

const Stack = createNativeStackNavigator();

const StackRoutes = ({ theme }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem("hasLaunched");
      if (hasLaunched === null) {
        // Première ouverture
        setIsFirstLaunch(true);
        await AsyncStorage.setItem("hasLaunched", "true");
      } else {
        // Pas la première ouverture
        setIsFirstLaunch(false);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return null; // Affiche un écran de chargement si nécessaire
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={isFirstLaunch ? "Welcome" : "App"}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signin"
          component={Signin}
        />
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
          options={{ header: () => <HeaderPage title={"Notifications"} /> }}
          name="Notifications"
          component={NotificationsScreen}
        />
        <Stack.Screen
          options={{ header: () => <HeaderPage title={"Restaurant List"} /> }}
          name="RestaurantList"
          component={RestoListScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RestaurantDetails"
          component={RestoDetailsScreen}
        />
        <Stack.Screen
          options={{ header: () => <NotificationDetailsHeader /> }}
          name="NotificationDetails"
          component={NotificationDetailsScreen}
        />
        <Stack.Screen
          options={{ header: () => <MessageHeader /> }}
          name="Message"
          component={MessageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;

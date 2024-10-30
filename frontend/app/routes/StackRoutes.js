import { useState, useEffect, useContext } from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Auth
import { AuthContext } from "../context/authContext";

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

//Loading:
import LoadingScreen from "./LoadingScreen";

const Stack = createNativeStackNavigator();

const StackRoutes = ({ theme }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const { userToken, loading } = useContext(AuthContext);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem("hasLaunched");
      if (hasLaunched === null) {
        setIsFirstLaunch(true);
        await AsyncStorage.setItem("hasLaunched", "true");
      } else {
        setIsFirstLaunch(false);
      }
    };

    checkFirstLaunch();
  }, []);

  // Afficher un écran de chargement pendant que l'état d'authentification est vérifié
  if (loading || isFirstLaunch === null) {
    return <LoadingScreen />; // Un composant d'écran de chargement personnalisé
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={
          isFirstLaunch
            ? "Welcome" // Première ouverture de l'application
            : userToken
            ? "App" // Si l'utilisateur est connecté
            : "Login" // Si l'utilisateur n'est pas connecté
        }
      >
        {/* Affichage de l'écran de bienvenue si c'est la première ouverture */}
        {isFirstLaunch && (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Welcome"
            component={Welcome}
          />
        )}

        {/* Routes accessibles seulement si l'utilisateur est connecté */}
        {userToken ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="App"
              component={Routes} // Page principale après connexion
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
              options={{
                header: () => <HeaderPage title={"Restaurant List"} />,
              }}
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
          </>
        ) : (
          // Routes de connexion/inscription si l'utilisateur n'est pas connecté
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;

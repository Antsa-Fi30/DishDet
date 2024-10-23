import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages:
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
          name="Notifications"
          component={NotificationsScreen}
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notification details"
          component={RestoDetailsScreen}
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

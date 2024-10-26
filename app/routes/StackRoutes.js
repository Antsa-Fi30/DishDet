import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
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
import NotificationDetailsScreen from "../screens/NotificationScreen/NotificationDetailsScreen";
import NotificationDetailsHeader from "../components/NotificationScreen/NotificationDetailsHeader";

const Stack = createNativeStackNavigator();

const StackRoutes = ({ theme }) => {
  return (
    <NavigationContainer theme={theme}>
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

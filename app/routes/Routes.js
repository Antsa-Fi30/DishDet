import { View, TouchableOpacity, StyleSheet } from "react-native";

//React navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Icon:
import Octicons from "@expo/vector-icons/Octicons";

//Components header ,bottombar
import TabBar from "../components/templates/TabBar";

//Pages:
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SavedScreen from "../screens/SavedScreen/SavedScreen";
import BookingScreen from "../screens/BookingScreen/BookingScreen";
import MapScreen from "../screens/MapScreen/MapScreen";
import HeaderHome from "../components/HomeScreen/HeaderHome";
import HeaderSaved from "../components/SavedScreen/HeaderSaved";
import HeaderProfil from "../components/ProfilScreen/HeaderProfil";
import BookingHeader from "../components/BookingScreen/BookingHeader";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        options={{ header: () => <HeaderHome /> }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ header: () => <HeaderSaved /> }}
        name="Saved"
        component={SavedScreen}
      />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen
        options={{ header: () => <BookingHeader /> }}
        name="Booking"
        component={BookingScreen}
      />
      <Tab.Screen
        options={{ header: () => <HeaderProfil /> }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});

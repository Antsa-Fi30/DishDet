import { View, TouchableOpacity, StyleSheet } from "react-native";

//React navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Icon:
import Octicons from "@expo/vector-icons/Octicons";

//Components header ,bottombar
import TabBar from "../components/templates/TabBar";

//Pages:
//Acceuil page:
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import HeaderHome from "../components/HomeScreen/HeaderHome";

//Profil page:
import HeaderProfil from "../components/ProfilScreen/HeaderProfil";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

//Saved
import SavedScreen from "../screens/SavedScreen/SavedScreen";

//Map
import MapScreen from "../screens/MapScreen/MapScreen";

//Chat page
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import ChatHeader from "../components/ChatScreen/ChatHeader";

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
        options={{ header: () => <ChatHeader /> }}
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{ header: () => <HeaderHome /> }}
        name="Saved"
        component={SavedScreen}
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

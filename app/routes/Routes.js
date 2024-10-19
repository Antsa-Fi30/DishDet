import { View, TouchableOpacity, StyleSheet } from "react-native";

//React navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Icon:
import Octicons from "@expo/vector-icons/Octicons";

//Components header ,bottombar
import TabBar from "../components/templates/TabBar";
import HeaderHome from "../components/templates/HeaderHome";

//Pages:
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SavedScreen from "../screens/SavedScreen/SavedScreen";
import BookingScreen from "../screens/BookingScreen/BookingScreen";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderHome name={"Brooklyn state 200"} />,
          headerRight: () => (
            <View>
              <TouchableOpacity>
                <Octicons
                  style={{ marginRight: 20 }}
                  name="bell-fill"
                  size={20}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});

import React, { Component, useEffect } from "react";

//React Native components
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

//React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";

//Icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

//UI Library : react-native paper
import { BottomNavigation, useTheme } from "react-native-paper";

//Pages in Home 's screen
import Map from "../screens/HomeScreen/Map";
import Suggestion from "../screens/HomeScreen/Suggestion";
import Search from "../screens/HomeScreen/Search";
// import Acceuil from "./Acceuil";

const Tab = createBottomTabNavigator();

const Routes = () => {
  const theme = useTheme();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            style={[
              styles.bottombar,
              { backgroundColor: theme.colors.background },
            ]}
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;
              return label;
            }}
          />
        )}
      >
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="map" size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name="Suggestion"
          component={Suggestion}
          options={{
            tabBarLabel: "Suggestion",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  name="map-marker-multiple-outline"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Actuality"
          component={Search}
          options={{
            tabBarLabel: "Actuality",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="restaurant-sharp" size={size} color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    margin: 10,
  },
  bottombar: {
    // padding: 2,
  },
});

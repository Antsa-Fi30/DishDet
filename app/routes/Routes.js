import React from "react";
//React Native components
import { StyleSheet } from "react-native";

//React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";

//Icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//UI Library : react-native paper
import { BottomNavigation, useTheme } from "react-native-paper";

//Pages in Home 's screen
import Map from "../screens/HomeScreen/Map";

//Traductor
import { useTranslation } from "react-i18next";
import Home from "../screens/HomeScreen/Home";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const Tab = createBottomTabNavigator();

const Routes = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            style={[{ backgroundColor: theme.colors.background }]}
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
                return options.tabBarIcon({ focused, color, size: 25 });
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
          name="Home"
          component={Home}
          options={{
            tabBarLabel: `${t("menu4")}`,
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: `${t("menu1")}`,
            tabBarIcon: ({ color, size }) => {
              return <Icon name="map" size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            headerStatusBarHeight: 20,
            tabBarLabel: `${t("menu5")}`,
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Routes;

const styles = StyleSheet.create({});

import React, { memo } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
type NavBarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const NavigationBar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.navigationBar,
        { backgroundColor: theme.colors.onSecondary, borderRadius: 15 },
      ]}
    >
      <TouchableOpacity
        style={[styles.tab, activeTab === "Nearby" && styles.activeTab]}
        onPress={() => setActiveTab("Nearby")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "Nearby" && styles.activeTabText,
          ]}
        >
          Nearby
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === "Actuality" && styles.activeTab]}
        onPress={() => setActiveTab("Actuality")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "Actuality" && styles.activeTabText,
          ]}
        >
          Actuality
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF6347", // Couleur de l'indicateur actif
  },
  tabText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  activeTabText: {
    fontFamily: "Montserrat-Bold",
    color: "#FF6347", // Couleur du texte actif
  },
});

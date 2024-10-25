import React, { memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type NavBarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const NavigationBar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.navigationBar}>
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
    backgroundColor: "#f8f8f8",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
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
    color: "#333",
    fontSize: 14,
  },
  activeTabText: {
    fontFamily: "Montserrat-Bold",
    color: "#FF6347", // Couleur du texte actif
  },
});

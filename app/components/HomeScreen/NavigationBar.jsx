import React, { memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NavigationBar = ({ activeTab, setActiveTab }) => {
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
        style={[styles.tab, activeTab === "Actualité" && styles.activeTab]}
        onPress={() => setActiveTab("Actualité")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "Actualité" && styles.activeTabText,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF6347", // Couleur de l'indicateur actif
  },
  tabText: {
    fontFamily: "Montserrat-Medium",
    color: "#333",
    fontSize: 16,
  },
  activeTabText: {
    fontFamily: "Montserrat-Bold",
    color: "#FF6347", // Couleur du texte actif
  },
});

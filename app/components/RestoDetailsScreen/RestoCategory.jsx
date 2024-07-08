import { StyleSheet, ActivityIndicator, View, Image } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { useFonts } from "expo-font";

const RestoCategory = ({ categoryName, categoryIcon }) => {
  const [fontsLoaded] = useFonts({
    "Poppins-medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded || isLoading) {
    return (
      <View style={{ justifyContent: "center", marginTop: 50 }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={[styles.info, { fontFamily: "Poppins-medium", fontSize: 20 }]}
      >
        {categoryName}
      </Text>
      <Image source={{ uri: categoryIcon }} style={styles.itemIcon} />
    </View>
  );
};

export default RestoCategory;

const styles = StyleSheet.create({
  info: {
    fontFamily: "Poppins",
  },
  itemIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
});

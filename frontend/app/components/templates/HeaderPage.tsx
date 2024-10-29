import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation, useRoute } from "@react-navigation/native";

type HeaderPageProps = {
  title: string;
};

const HeaderPage: React.FC<HeaderPageProps> = ({ title }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[styles.header, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.goBack()}
        >
          <Octicons
            style={{ marginRight: 20 }}
            name="arrow-left"
            size={30}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <View style={styles.location}>
          <Text style={styles.label}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 15,
    backgroundColor: "transparent ",
  },
  label: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  backbutton: {
    position: "absolute",
    left: 30,
  },
});

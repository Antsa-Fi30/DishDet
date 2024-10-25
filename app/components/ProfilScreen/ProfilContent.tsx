import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Octicons from "@expo/vector-icons/Octicons";

type SettingsButtonProps = {
  icon: any;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

const SettingsButton: React.FC<SettingsButtonProps> = ({
  icon,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Octicons style={{ color: "red" }} name={icon} size={24} color="black" />
      <Text style={[styles.buttonText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const ProfilContent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SettingsButton
        icon="person"
        label="Edit Profile"
        onPress={() => navigation.navigate("Edit")}
      />
      <SettingsButton
        icon="location"
        label="Location"
        onPress={() => navigation.navigate("Location")}
      />
      <SettingsButton
        icon="globe"
        label="Language"
        onPress={() => navigation.navigate("Language")}
      />
      <SettingsButton
        icon="bell"
        label="Notification"
        onPress={() => navigation.navigate("Notification")}
      />
      <SettingsButton
        icon="comment"
        label="Feedback"
        onPress={() => navigation.navigate("Feedback")}
      />
    </View>
  );
};

export default ProfilContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    marginVertical: 10,
    borderRadius: 25,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    gap: 10,
  },
  logoutButton: {
    borderColor: "orange",
  },
  iconContainer: {
    marginRight: 15,
  },
  buttonText: {
    color: "#121212",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  logoutText: {
    color: "orange",
  },
});

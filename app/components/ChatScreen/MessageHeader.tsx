import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Octicons from "@expo/vector-icons/Octicons";

const MessageHeader = () => {
  const navigation = useNavigation();
  const username = "Alice";
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.goBack()}
        >
          <Octicons
            style={{ marginRight: 20 }}
            name="arrow-left"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.name}>
          <Avatar.Image size={40} source={require("../../../assets/1.jpg")} />
          <Text style={styles.label}>{username}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MessageHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  header: {
    paddingVertical: 10,
    backgroundColor: "transparent ",
  },
  label: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: "#000",
  },
  name: {
    position: "relative",
    left: -70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backbutton: {
    position: "absolute",
    left: 20,
  },
});

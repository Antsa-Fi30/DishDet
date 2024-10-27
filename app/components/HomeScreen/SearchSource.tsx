import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Icons
import Octicons from "@expo/vector-icons/Octicons";

// React Native Paper
import { TextInput, Text, useTheme } from "react-native-paper";
import { SearchNavigationProp } from "../../constants/NavigationType";

const SearchSource = () => {
  const navigation = useNavigation<SearchNavigationProp>();
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.searchbar,
        {
          backgroundColor: theme.colors.secondaryContainer,
          borderColor: theme.colors.secondary,
        },
      ]}
      onPress={() => navigation.navigate("Search")}
    >
      <Octicons name="search" size={24} color="red" style={styles.icon} />
      <View style={styles.inputbar}>
        <Text style={{ fontFamily: "Montserrat-Regular" }}>View source</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchSource;

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    paddingHorizontal: 16,
    marginHorizontal: 18,
    marginVertical: 20,
    borderWidth: 0.5, // Épaisseur de la bordure
    borderColor: "#ddd", // Couleur de la bordure
    gap: 10,
  },
  icon: {
    marginRight: 10,
  },
  inputbar: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 14,
  },
});

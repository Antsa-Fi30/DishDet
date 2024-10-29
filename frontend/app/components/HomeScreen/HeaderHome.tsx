import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import { Text, useTheme } from "react-native-paper";
import { NotificationsNavigationProp } from "../../constants/NavigationType";

const HeaderHome = () => {
  const navigation = useNavigation<NotificationsNavigationProp>();
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.header,
        { backgroundColor: theme.colors.elevation.level3 },
      ]}
    >
      {/* Location et Notifications */}
      <View style={styles.container}>
        <View style={styles.location}>
          <Octicons name="location" size={20} color={theme.colors.primary} />
          <Text style={styles.label}>Time square way, Brooklyn street</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Octicons name="bell" size={20} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <View
          style={[
            styles.searchBar,
            {
              backgroundColor: "transparent",
              borderColor: theme.dark ? "#ddd" : "#3C3D37",
            },
          ]}
        >
          <Octicons name="search" size={20} color={theme.colors.primary} />
          <TextInput
            maxFontSizeMultiplier={1}
            placeholder="Rechercher un restaurant..."
            placeholderTextColor="#ddd"
            style={[
              styles.searchInput,
              { color: theme.dark ? "#fff" : "#000" },
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              /* Action des filtres */
            }}
          >
            <Octicons name="filter" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Filtres rapides */}
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}
        >
          <TouchableOpacity
            style={[
              styles.filterChip,
              {
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.primary,
              },
            ]}
          >
            <Text style={styles.activeChipText}>À proximité</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.chipText}>Meilleure note</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.chipText}>Promotions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <Text style={styles.chipText}>Ouvert</Text>
          </TouchableOpacity>
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  header: {
    paddingVertical: 20,
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
  },
  label: {
    fontFamily: "Montserrat-Regular",
    fontSize: 13,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  searchContainer: {
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 0.5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
  },
  filtersContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  filterChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "white",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  chipText: {
    color: "#666",
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
  },
  activeChipText: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
  },
});

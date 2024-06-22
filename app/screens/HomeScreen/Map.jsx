import { useNavigation } from "@react-navigation/native";
import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Searchbar, IconButton, useTheme } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
        <IconButton
          icon="cog"
          iconColor={theme.colors.primary}
          style={styles.iconButton}
          mode="contained"
          size={20}
          onPress={() => navigation.push(t("setting.appbar"))}
        />
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      />
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchBar: {
    position: "absolute",
    top: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 25,
  },
  iconButton: {
    position: "absolute",
    top: 80,
    right: 10,
    backgroundColor: "white", // Optional: to make it stand out against the map
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
    zIndex: 10000, // Ensure the overlay is on top
  },
});

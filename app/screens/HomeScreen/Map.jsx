import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Modal,
  Text,
  Button,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Searchbar, IconButton, useTheme } from "react-native-paper";
import * as Location from "expo-location";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restos, setRestos] = useState([]);
  const [selectedResto, setSelectedResto] = useState(null);
  const theme = useTheme();

  const onChangeSearch = (query) => setSearchQuery(query);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setLoading(false);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get(
          `https://nominatim.openstreetmap.org/search?`,
          {
            params: {
              q: "restaurant",
              format: "json",
              viewbox: "47.4,-18.9,47.7,-18.7", // Coordonnées pour Antananarivo
              bounded: 1,
            },
          }
        );

        setRestos(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des restaurants:", error);
      }
    };

    fetchRestaurants();
  }, [location]);

  const mapStyle = [
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <IconButton
        icon="cog"
        iconColor={theme.colors.primary}
        style={styles.iconButton}
        mode="contained"
        size={20}
        onPress={() => navigation.push(t("setting.appbar"))}
      />

      {location && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          customMapStyle={mapStyle}
          showsUserLocation
          showsMyLocationButton
        >
          {restos.map((res) => (
            <Marker
              key={res.place_id}
              coordinate={{
                latitude: parseFloat(res.lat),
                longitude: parseFloat(res.lon),
              }}
              title={res.name}
              onPress={() => setSelectedResto(res)}
            />
          ))}
        </MapView>
      )}

      {selectedResto && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => setSelectedResto(null)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedResto.name}</Text>
            <Text style={styles.modalText}>
              Adresse : {selectedResto.display_name}
            </Text>
            <Button title="Fermer" onPress={() => setSelectedResto(null)} />
          </View>
        </Modal>
      )}
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
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    position: "absolute",
    top: 20,
    height: 45,
    width: "90%",
    alignSelf: "center",
    borderRadius: 25,
    zIndex: 999999,
  },
  iconButton: {
    position: "absolute",
    top: 80,
    right: 10,
    backgroundColor: "white",
    zIndex: 999999,
  },
  iconButton1: {
    position: "absolute",
    bottom: 60,
    right: 5,
    backgroundColor: "white",
    zIndex: 999999,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

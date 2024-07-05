import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Button,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Text, IconButton, useTheme, Modal } from "react-native-paper";
import * as Location from "expo-location";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_PLACES_API_KEY = "AIzaSyBdmg1sg_LxN-qjhCRU0fQbMblo2SeorGU";

const Map = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restos, setRestos] = useState([]);
  const [selectedResto, setSelectedResto] = useState(null);
  const [restoDetails, setRestoDetails] = useState(null);
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

  const haversineDistance = (coords1, coords2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Rayon de la Terre en km
    const dLat = toRad(coords2.latitude - coords1.latitude);
    const dLon = toRad(coords2.longitude - coords1.longitude);
    const lat1 = toRad(coords1.latitude);
    const lat2 = toRad(coords2.latitude);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance en km
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!location) return;

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

        const maxDistance = 5; // Distance maximale en km
        const filteredRestos = res.data.filter((res) => {
          const distance = haversineDistance(
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
            {
              latitude: parseFloat(res.lat),
              longitude: parseFloat(res.lon),
            }
          );
          return distance <= maxDistance;
        });

        setRestos(filteredRestos);
      } catch (error) {
        console.error("Erreur lors de la récupération des restaurants:", error);
      }
    };

    fetchRestaurants();
  }, [location]);

  const fetchRestaurantDetails = async (placeId) => {
    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?`,
        {
          params: {
            place_id: placeId,
            key: GOOGLE_PLACES_API_KEY,
          },
        }
      );

      setRestoDetails(res.data.result);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails du restaurant:",
        error
      );
    }
  };

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

  console.log(restoDetails);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
      </View>
    );
  }

  console.log(restos);

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
              onPress={() => {
                setSelectedResto(res);
                fetchRestaurantDetails(res.place_id);
              }}
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
          <View
            style={[
              styles.modalView,
              { backgroundColor: theme.colors.background },
            ]}
          >
            <Text style={styles.modalText}>{selectedResto.name}</Text>
            <Text style={styles.modalText}>
              Adresse : {selectedResto.display_name}
            </Text>

            {restoDetails && (
              <View>
                <Text style={styles.modalText}>
                  Note : {restoDetails.rating}
                </Text>
                {restoDetails.photos &&
                  restoDetails.photos.map((photo, index) => (
                    <Image
                      key={index}
                      style={styles.photo}
                      source={{
                        uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${GOOGLE_PLACES_API_KEY}`,
                      }}
                    />
                  ))}
              </View>
            )}

            <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Button
                color={theme.colors.secondary}
                title="Tracer une itineraire"
                onPress={() => setSelectedResto(null)}
              />
              <Button title="Fermer" onPress={() => setSelectedResto(null)} />
            </View>
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
  photo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

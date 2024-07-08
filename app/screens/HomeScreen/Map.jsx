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
import { getSpecialOffers } from "../../api/GlobalApi";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Foursquare = "fsq3N7raVaNIbphpvNu/Wn0e/5AajPf7ixOYOsQaMxyIUc4=";

const Map = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [restos, setRestos] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [selectedResto, setSelectedResto] = useState(null);
  var theme = useTheme();

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
    if (location) {
      const fetchRestaurants = async (latitude, longitude) => {
        try {
          const res = await axios.get(
            `https://api.foursquare.com/v3/places/search`,
            {
              headers: {
                Authorization: Foursquare,
              },
              params: {
                query: "restaurant",
                ll: `${latitude},${longitude}`,
                radius: 10000, // Radius in meters
                limit: 50,
              },
            }
          );
          setRestos(res.data.results);
        } catch (err) {
          console.log("Erreur lors du fetch : " + err);
        }
      };

      const fetchSpecials = getSpecialOffers(
        location.coords.latitude,
        location.coords.longitude
      );

      fetchRestaurants(location.coords.latitude, location.coords.longitude);
    }
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

  const getDetails = (fsq_id) => {
    try {
      axios
        .get(`https://api.foursquare.com/v3/places/${fsq_id}`)
        .then((res) => console.log(res));
    } catch (error) {
      console.log("Erreur lors de la fetch du details : " + error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
      </View>
    );
  }

  if (selectedResto != null) {
    getDetails(selectedResto.fsq_id);
  }

  return (
    <View style={styles.container}>
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
              key={res.fsq_id}
              coordinate={{
                latitude: parseFloat(res.geocodes.main.latitude),
                longitude: parseFloat(res.geocodes.main.longitude),
              }}
              title={res.name}
              onPress={() => setSelectedResto(res)}
            />
          ))}
          {specials.map((res) => (
            <Marker
              key={res.fsq_id}
              coordinate={{
                latitude: parseFloat(res.geocodes.main.latitude),
                longitude: parseFloat(res.geocodes.main.longitude),
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
          <View
            style={[
              styles.modalView,
              { backgroundColor: theme.colors.background },
            ]}
          >
            <Text
              style={[
                styles.modalText,
                { fontSize: 20, fontFamily: "Poppins-bold" },
              ]}
            >
              {selectedResto.name}
            </Text>

            <Text style={styles.modalText}>
              Adresse : {selectedResto.location.formatted_address}
            </Text>
            <Text style={styles.modalText}>
              Localisation : {selectedResto.location.locality}
            </Text>

            <Text style={styles.modalText}>
              Distance depuis votre position : {selectedResto.distance} m
            </Text>
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
    fontFamily: "Poppins",
    textAlign: "center",
  },
});

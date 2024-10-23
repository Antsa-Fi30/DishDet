import React, { useEffect, useRef, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import MapView, { Polyline, PROVIDER_GOOGLE, Marker } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import axios from "axios";
import Search from "../../components/MapScreen/Search";
import Itineraire from "../../components/MapScreen/Itineraire";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const apiKey = `bcrAsGggLzm9gBYFxi1QddxyQgCBZkIa`; // API pour TomTom
const origin = { latitude: -18.8792, longitude: 47.5079 }; // Antananarivo
const destination = { latitude: -18.9146, longitude: 47.5316 }; // Autre point à Antananarivo

const MapStyle = [
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

const restaurantData = [
  {
    id: "1",
    name: "Restaurant La Terrasse",
    location: "Antsobolo, Antananarivo",
    coordinates: {
      latitude: -18.8705,
      longitude: 47.532,
    },
    rating: 4.5,
    reviews: 120,
  },
  {
    id: "2",
    name: "Chez Tantely",
    location: "Antsobolo, Antananarivo",
    coordinates: {
      latitude: -18.871,
      longitude: 47.533,
    },
    rating: 4.2,
    reviews: 98,
  },
  {
    id: "3",
    name: "Le Gourmet",
    location: "Antsobolo, Antananarivo",
    coordinates: {
      latitude: -18.8712,
      longitude: 47.5325,
    },
    rating: 4.7,
    reviews: 150,
  },
  {
    id: "4",
    name: "Snack-Bar Faly",
    location: "Antsobolo, Antananarivo",
    coordinates: {
      latitude: -18.8715,
      longitude: 47.5318,
    },
    rating: 4.0,
    reviews: 60,
  },
  {
    id: "5",
    name: "La Bonne Fourchette",
    location: "Antsobolo, Antananarivo",
    coordinates: {
      latitude: -18.8707,
      longitude: 47.5312,
    },
    rating: 4.3,
    reviews: 110,
  },
];

const MapScreen = () => {
  const [routeCoords, setRouteCoords] = useState([]);
  const bottomSheetRef = useRef(null); // Référence pour le BottomSheet
  const SheetPositions = useMemo(() => ["25%", "50%", "90%"], []);

  // Fonction pour afficher le BottomSheet
  const handleShowBottomSheet = () => {
    if (bottomSheetRef.current) {
      console.log("BottomSheet ref:", bottomSheetRef.current); // Ajoute cette ligne pour déboguer
      bottomSheetRef.current.expand(); // Ou utilise snapToIndex(1)
    } else {
      console.log("Référence du BottomSheet non disponible");
    }
  };

  // Fonction pour tracer l'itinéraire
  const traceRoute = async () => {
    try {
      const response = await axios.get(
        `https://api.tomtom.com/routing/1/calculateRoute/${origin.latitude},${origin.longitude}:${destination.latitude},${destination.longitude}/json?key=${apiKey}`
      );
      const coordinates = response.data.routes[0].legs[0].points.map(
        (point) => ({
          latitude: point.latitude,
          longitude: point.longitude,
        })
      );
      setRouteCoords(coordinates);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'itinéraire : ", error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={MapStyle}
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {routeCoords.length > 0 && (
          <Polyline
            coordinates={routeCoords}
            strokeColor="red"
            strokeWidth={4}
          />
        )}

        {restaurantData.map((restaurant) => (
          <Marker
            key={restaurant.id}
            coordinate={restaurant.coordinates}
            title={restaurant.name}
            description={restaurant.location}
          />
        ))}
      </MapView>
      <View>
        {/* Barre de recherche */}
        <Search />

        {/* Bouton pour tracer l'itinéraire */}
        <Itineraire onPress={traceRoute} />

        {/* Bouton pour ouvrir le BottomSheet */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    zIndex: 20000,
    alignItems: "center",
    justifyContent: "center",
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MapScreen;

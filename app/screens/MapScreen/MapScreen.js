import React, { useEffect, useRef, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";
import MapView, { Polyline, PROVIDER_GOOGLE, Marker } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import axios from "axios";
import Search from "../../components/MapScreen/Search";
import Itineraire from "../../components/MapScreen/Itineraire";

const apiKey = `bcrAsGggLzm9gBYFxi1QddxyQgCBZkIa`; // API pour TomTom
const origin = { latitude: -18.8792, longitude: 47.5079 }; // Antananarivo
const destination = { latitude: -18.9146, longitude: 47.5316 }; // Autre point à Antananarivo

const MapStyleDark = [
  [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
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
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
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
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
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
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
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
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ],
];

const MapStyleLight = [
  [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6",
        },
      ],
    },
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
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
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
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6",
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
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63",
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
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b9d3c2",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d",
        },
      ],
    },
  ],
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
  const theme = useTheme();

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

  console.log(theme.dark);
  console.log(routeCoords);

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        customMapStyle={theme.dark ? MapStyleDark : MapStyleLight}
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
      <View style={{ position: "absolute", width: "100%", zIndex: 1 }}>
        <Search />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

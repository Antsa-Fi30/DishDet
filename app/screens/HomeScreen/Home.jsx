import { useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import Header from "../../components/HomeScreen/Header";
import { StatusBar } from "expo-status-bar";
import Slider from "../../components/HomeScreen/Slider";
import { ScrollView } from "react-native";
import { getRestaurantNearby, getSpecialOffers } from "../../api/GlobalApi";
import { useFonts } from "expo-font";
import axios from "axios";
import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useTheme();
  const [location, setLocation] = useState(null);
  const [restoNear, setRestoNear] = useState(null);
  const [specialOffers, setSpecialOffers] = useState(null); // Nouvel état pour les offres spéciales
  const [isLoading, setIsLoading] = useState(true);

  const favorites = useSelector((state) => state.favorites);

  const [fontsLoaded] = useFonts({
    Poppins: require("../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setIsLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      const fetchRestaurants = async (latitude, longitude) => {
        try {
          const res = await getRestaurantNearby(latitude, longitude);
          setRestoNear(res);
        } catch (err) {
          console.log("Erreur lors du fetch : " + err);
        }
      };

      const fetchSpecialOffers = async (latitude, longitude) => {
        try {
          const res = await getSpecialOffers(latitude, longitude);
          setSpecialOffers(res);
        } catch (err) {
          console.log("Erreur lors du fetch : " + err);
        }
      };

      fetchRestaurants(location.coords.latitude, location.coords.longitude);
      fetchSpecialOffers(location.coords.latitude, location.coords.longitude);
    } else {
      setIsLoading(false);
      console.log("Verifier votre connexion");
    }
  }, [location]);

  if (!fontsLoaded || isLoading) {
    return (
      <View style={{ justifyContent: "center", marginTop: 50 }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  console.log(specialOffers);
  console.log(favorites);

  return (
    <ScrollView>
      <View style={styles.header}>
        <StatusBar style="auto" />
        <Header location={location} />
      </View>
      <View style={styles.container}>
        <Slider data={specialOffers} title="Spéciales" />
        {/* Utilisez specialOffers ici */}
        <Slider data={restoNear} title="À proximité" />
        <Slider data={favorites} title="Favoris" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 9,
  },
  container: {
    padding: 9,
  },
});

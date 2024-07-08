//170
import { useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import Header from "../../components/HomeScreen/Header";
import { StatusBar } from "expo-status-bar";
import Slider from "../../components/HomeScreen/Slider";
import { ScrollView } from "react-native";
import { getRestaurantNearby } from "../../api/GlobalApi";
import { useFonts } from "expo-font";
import axios from "axios";
import { useTheme } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useTheme();
  const [restoFav, setRestoFav] = useState([]);
  const [location, setLocation] = useState(null);
  const [restoNear, setRestoNear] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const favorites = useSelector((state) => state.favorites);

  const Foursquare = "fsq3N7raVaNIbphpvNu/Wn0e/5AajPf7ixOYOsQaMxyIUc4=";

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
    // Add other fonts here if needed
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
                limit: 10,
              },
            }
          );
          setRestoNear(res.data.results);
        } catch (err) {
          console.log("Erreur lors du fetch : " + err);
        }
      };

      fetchRestaurants(location.coords.latitude, location.coords.longitude);
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

  return (
    <ScrollView>
      <View style={styles.header}>
        <StatusBar style="auto" />
        <Header />
      </View>
      <View style={styles.container}>
        <Slider title="Offres speciales" />
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

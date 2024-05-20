import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import SuggestionList from "../../components/SuggestionScreen/SuggestionList";
import { Suggest } from "../../constants/Suggest";

import { GOOGLE_API_KEY } from "@env";

import * as Location from "expo-location";
import { ActivityIndicator, Text } from "react-native-paper";

const Suggestion = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    try {
      fetchLocation();
    } catch (error) {
      console.log("Error in fetching location :" + error);
    } finally {
      setLoading(false);
    }
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location);
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

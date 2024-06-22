import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import SuggestionList from "../../components/SuggestionScreen/SuggestionList";
import { Suggest } from "../../constants/Suggest";
import { Text } from "react-native-paper";

import { GOOGLE_API_KEY } from "@env";

import * as Location from "expo-location";

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
      {/* {text === "Waiting.." ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <Text>{text}</Text>
      )} */}
      <SuggestionList DATA={Suggest} />
    </View>
  );
};

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { Text, useTheme } from "react-native-paper";
import axios from "axios";

const Foursquare = "fsq3N7raVaNIbphpvNu/Wn0e/5AajPf7ixOYOsQaMxyIUc4=";

const Items = ({ name, adresse, id, item, icon }) => {
  const [photo, setPhoto] = useState(null); // Initialize as null
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  //Photo fetching:
  useEffect(() => {
    if (item) {
      const options = {
        method: "GET",
        url: `https://api.foursquare.com/v3/places/${id}/photos`,
        params: { limit: "1" },
        headers: {
          accept: "application/json",
          Authorization: Foursquare,
        },
      };

      axios
        .request(options)
        .then((response) => {
          if (response.data.length > 0) {
            setPhoto(response.data[0]);
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [item, id]);

  const iconUrl = `${icon.prefix}bg_64${icon.suffix}`;
  const photoUrl = photo ? `${photo.prefix}original${photo.suffix}` : null;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: theme.colors.elevation.level2 },
      ]}
    >
      <View style={styles.image}>
        {isLoading ? (
          <ActivityIndicator size="small" color={theme.colors.primary} />
        ) : photoUrl ? (
          <Image source={{ uri: photoUrl }} style={styles.photo} />
        ) : (
          <Text>No Image Available</Text>
        )}
        <Image source={{ uri: iconUrl }} style={styles.itemIcon} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{adresse}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  image: {
    marginBottom: 10,
  },
  itemIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  photo: {
    width: 200,
    height: 99,
    borderRadius: 20,
  },
});

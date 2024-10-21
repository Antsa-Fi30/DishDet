import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import HeadingTitle from "../templates/HeadingTitle";
import RestaurantCard from "./RestaurantCard";
import { Text } from "react-native-paper";
import ExploreAvatar from "./ExploreAvatar";

const ExploreList = ({ typeresto, label }) => {
  return (
    <View style={styles.container}>
      <HeadingTitle text={"Explore"} viewAll={"Restaurant List"} />
      {label ? <Text style={styles.label}>{label}</Text> : <></>}
      <FlatList
        data={typeresto}
        renderItem={({ item }) => (
          <ExploreAvatar name={item.name} style={styles.card} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default ExploreList;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 2,
    paddingHorizontal: 1,
    marginVertical: 10,
  },
  label: {
    fontFamily: "Montserrat-Regular",
    paddingVertical: 10,
    marginLeft: 5,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    maxWidth: Dimensions.get("window").width / 3 - 20, // Limite la largeur de chaque carte à 1/3 de l'écran
  },
});

import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import HeadingTitle from "../templates/HeadingTitle";
import { Text } from "react-native-paper";
import ExploreAvatar from "./ExploreAvatar";

type RestoType = {
  id: number;
  name: string;
};

type ExploreListProps = {
  typeresto: RestoType[];
  label?: string;
};

const ExploreList: React.FC<ExploreListProps> = ({ typeresto, label }) => {
  return (
    <View style={styles.container}>
      <HeadingTitle text={"Explore"} viewAll />
      {label && <Text style={styles.label}>{label}</Text>}
      <FlatList
        data={typeresto}
        renderItem={({ item }) => (
          <ExploreAvatar key={item.id} name={item.name} />
        )}
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
    maxWidth: Dimensions.get("window").width / 3 - 20, //Limite la largeur de la carte selon l'ecran a 1/3
  },
});

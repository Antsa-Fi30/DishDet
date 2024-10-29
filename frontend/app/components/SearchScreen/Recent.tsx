import { StyleSheet, View } from "react-native";
import React from "react";
import HeadingTitle from "../templates/HeadingTitle";
import { List, Text } from "react-native-paper";

const Recent = () => {
  return (
    <View style={styles.container}>
      <HeadingTitle text={"Recents"} viewAll={false} />
      <View style={styles.listcontainer}>
        <List.Item
          title={<Text style={styles.label}>Burger</Text>}
          // left={(props) => <List.Icon {...props} icon="folder" />}
          right={(props) => <List.Icon {...props} icon="folder" />}
          style={styles.item}
        />
      </View>
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 6,
  },
  listcontainer: {
    paddingVertical: 10,
  },
  item: {
    borderBottomWidth: 0.5,
    borderColor: "#000",
  },
  label: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
});

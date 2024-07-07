import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import Heading from "../global/Heading";
import Items from "./Items";

const Slider = ({ title, data }) => {
  if (!data || data.length === 0) {
    return (
      <View>
        <Heading text={title} />
        <Text style={styles.noData}>Aucune donnée disponible</Text>
      </View>
    );
  }

  return (
    <View>
      <Heading text={title} />
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const icon = item.categories[0].icon;
          return (
            <View key={index}>
              <Items
                item={item}
                name={item.name}
                adresse={item.location?.formatted_address}
                id={item.fsq_id}
                icon={icon}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.fsq_id}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  noData: {
    padding: 10,
    fontFamily: "Poppins",
    color: "red",
    textAlign: "center",
  },
});

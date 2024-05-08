//React components
import React from "react";

//React native's elements
import { StyleSheet, Image, View, ScrollView } from "react-native";

//React-navigation's element(s)
import { useRoute } from "@react-navigation/native";

//React-native-paper components
import { Button, useTheme } from "react-native-paper";

//Language:
import { useTranslation } from "react-i18next";

//Local components
import SuggestInfo from "../../components/SuggestDetails/SuggestInfo";
import SuggestAbout from "../../components/SuggestDetails/SuggestAbout";
import SuggestPhoto from "../../components/SuggestDetails/SuggestPhoto";
import Divider from "../../components/SuggestDetails/Divider";
import SuggestButton from "../../components/SuggestDetails/SuggestButton";

const SuggestionDetails = () => {
  const param = useRoute().params;
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <ScrollView style={{ height: "93%" }}>
        <Image
          source={require("../../../assets/4.jpg")}
          style={{ width: "100%", height: 200 }}
        />

        {/* INFORMATIONS */}
        <View style={styles.container}>
          <SuggestInfo
            name={param?.restaurant.name}
            region={param?.restaurant.location}
            location={param?.restaurant.street}
            star={param?.restaurant.star}
          />

          {/* Line divider */}
          <Divider />

          <SuggestButton />

          <Divider />

          {/* Description */}
          <View>
            {/* About Section */}
            <SuggestAbout description={param.restaurant.description} />
            {/* Line divider */}
            <View
              style={{
                borderWidth: 0.4,
                borderColor: "#ddd",
                marginTop: 20,
                marginBottom: 10,
              }}
            />
            {/* If there is some photos of the restaurant, It would be here */}
            <SuggestPhoto />
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttons}>
        <Button
          icon="map-search-outline"
          mode="contained"
          onPress={() => {
            console.log("Tracking...");
          }}
        >
          {t("btn_find")}
        </Button>
      </View>
    </View>
  );
};

export default SuggestionDetails;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 4,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
});

//React native's elements
import { StyleSheet, Image, View, ScrollView } from "react-native";

//React-navigation's element(s)
import { useRoute } from "@react-navigation/native";

//React-native-paper components
import { Button, useTheme, FAB } from "react-native-paper";

//Language:
import { useTranslation } from "react-i18next";

//Local components:
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
      <ScrollView>
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
            <Divider />
            {/* If there is some photos of the restaurant, It would be here */}
            <SuggestPhoto />
          </View>
        </View>
      </ScrollView>
      <FAB
        icon="crosshairs-gps"
        style={styles.fab}
        onPress={() => {
          console.log("Tracking " + param?.restaurant.name + "...");
        }}
      />
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 20,
  },
});

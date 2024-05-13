//React
import { useState } from "react";

//React-native
import { StyleSheet, View } from "react-native";

//React-native-paper
import { Text, useTheme } from "react-native-paper";

//Used for translation language
import { useTranslation } from "react-i18next";

//Reusable Components
import SuggestionList from "../../components/SuggestionScreen/SuggestionList";
import Loading from "../../components/Loading";

const PlaceSaved = () => {
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : empty ? (
        <Text style={[styles.text, { color: theme.colors.tertiary }]}>
          {t("notice_saved")}
        </Text>
      ) : (
        <SuggestionList />
      )}
    </View>
  );
};

export default PlaceSaved;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 20,

    margin: "auto",
    marginTop: 30,
    textAlign: "center",
  },
});

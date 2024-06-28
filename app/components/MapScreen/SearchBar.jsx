import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Searchbar, useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Searchbar
        placeholder={t("placeholder")}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 20,
    zIndex: 10000,
  },
});

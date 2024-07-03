import React, { useState, useEffect } from "react";

//React Native components
import { StyleSheet } from "react-native";

//React Navigation
import { useNavigation, useRoute } from "@react-navigation/native";

//react-native paper
import { Appbar } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";

export default function AppTopBar({ title }) {
  const [showBack, setShowBack] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const { t } = useTranslation();

  const getTitle = () => {
    if (route.params?.setting?.label) {
      // Si le libellé des paramètres est défini, utilise-le
      return t(route.params.setting.label);
    } else if (route.params?.restaurant?.name) {
      // Si le nom du restaurant est défini, utilise-le
      return route.params.restaurant.name;
    } else {
      // Sinon, utilise simplement le nom de l'écran
      return route.name;
    }
  };

  useEffect(() => {
    setShowBack(route.name != "Dish Detective");
  }, [route]);

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.background,
        padding: 10,
        paddingVertical: 14,
      }}
    >
      {showBack && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title={getTitle()} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({});

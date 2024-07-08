import { StyleSheet, View } from "react-native";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Switcher from "./Switcher";
import { useTranslation } from "react-i18next";

const PreferenceList = ({ OptionList }) => {
  const { t } = useTranslation();
  const { toggleTheme, isThemeDark } = useContext(ThemeContext);
  const [someOtherPreference, setSomeOtherPreference] = useState(false);

  const toggleOtherPreference = () => {
    setSomeOtherPreference((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      {OptionList.map((item, index) => {
        let value;
        let update = () => {};

        switch (item.key) {
          case "theme":
            value = isThemeDark;
            update = toggleTheme;
            break;
          case "position":
            value = someOtherPreference;
            update = toggleOtherPreference;
            break;
        }

        return (
          <Switcher
            key={index}
            label={t(item.label)}
            value={value}
            update={update}
          />
        );
      })}
    </View>
  );
};

export default PreferenceList;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});

//React
import React, { useState } from "react";

//React-native
import { StyleSheet, View, TouchableOpacity } from "react-native";

// React native paper
import { Text, useTheme } from "react-native-paper";

// Components
import Heading from "../../components/Heading";

//Traduction
import { useTranslation } from "react-i18next";

const SuggestAbout = ({ description }) => {
  const [readMore, setReadMore] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View>
      <Heading text={"Apropos"} />
      {/* The long or short text goes here */}
      <Text
        style={{
          lineHeight: 25,
          fontSize: 14,
          fontWeight: "100",
          fontFamily: "Poppins",
        }}
        numberOfLines={readMore ? 500 : 5}
      >
        {description}
      </Text>

      {/* This is a kind of button that hide the text when it's very long */}
      <TouchableOpacity
        onPress={() => {
          setReadMore(!readMore);
        }}
      >
        <Text
          style={{
            color: theme.colors.tertiary,
            fontSize: 16,
            fontFamily: "Poppins",
          }}
        >
          {readMore ? t("close") : t("read")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestAbout;

const styles = StyleSheet.create({});

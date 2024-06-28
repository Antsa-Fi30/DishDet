import React from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";

const Loading = () => {
  const theme = useTheme();
  return (
    <ActivityIndicator
      style={{ marginTop: "50%" }}
      animating={true}
      color={theme.colors.primary}
      size={"large"}
    />
  );
};

export default Loading;

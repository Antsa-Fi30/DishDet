import React, { useCallback, useMemo, useState } from "react";
import {
  InteractionManager,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import TabBarButton from "./TabBarButton";
import { useTheme } from "react-native-paper";

const TabBar = ({ state, navigation }) => {
  const theme = useTheme();

  const primaryColor = theme.colors.primary;
  const greyColor = theme.colors.secondary;
  const backgroundTab = theme.colors.elevation.level1;

  const tabPositionX = useSharedValue(0);

  const [dimension, setDimension] = useState({ height: 20, width: 100 });

  const buttonWidth = useMemo(() => {
    return dimension.width / state.routes.length;
  }, [dimension.width, state.routes.length]);

  const onTabbarLayout = useCallback((e) => {
    setDimension({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  }, []);

  const onPress = useCallback(
    (route, index, isFocused) => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }

      InteractionManager.runAfterInteractions(() => {
        tabPositionX.value = withSpring(buttonWidth * index, {
          duration: 1000,
          damping: 20,
          stiffness: 90,
        });
      });
    },
    [buttonWidth, navigation, tabPositionX]
  );

  const onLongPress = useCallback(
    (route) => {
      navigation.emit({
        type: "tabLongPress",
        target: route.key,
      });
    },
    [navigation]
  );

  const animatedBg = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <SafeAreaView>
      <View
        onLayout={onTabbarLayout}
        style={[styles.tabbar, { backgroundColor: backgroundTab }]}
      >
        <Animated.View
          style={[
            animatedBg,
            {
              position: "absolute",
              backgroundColor: primaryColor,
              borderRadius: 35,
              marginHorizontal: 12,
              height: dimension.height - 20,
              width: buttonWidth - 25,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TabBarButton
              key={route.name}
              onPress={() => onPress(route, index, isFocused)}
              onLongPress={() => onLongPress(route)}
              isFocused={isFocused}
              routeName={route.name}
              color={isFocused ? "#fff" : greyColor}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};
export default TabBar;
const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    // position: "static",
    bottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 20,
    // borderTopLeftRadius: 35,
    // borderTopRightRadius: 35,
    borderRadius: 35,
    borderCurve: "continuous",
  },
});

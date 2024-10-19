import { useState, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  InteractionManager,
  SafeAreaView,
} from "react-native";
import TabBarButton from "./TabBarButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TabBar({ state, descriptors, navigation }) {
  const primaryColor = "red";
  const greyColor = "#222";

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

  const tabPositionX = useSharedValue(0);

  const animatedBg = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <SafeAreaView edge={["bottom"]}>
      <View onLayout={onTabbarLayout} style={styles.tabbar}>
        <Animated.View
          style={[
            animatedBg,
            {
              position: "absolute",
              backgroundColor: primaryColor,
              borderRadius: 35,
              marginHorizontal: 12,
              height: dimension.height - 15,
              width: buttonWidth - 25,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          return (
            <TabBarButton
              key={route.name}
              onPress={() => onPress(route, index, isFocused)}
              onLongPress={() => onLongPress(route)}
              isFocused={isFocused}
              routeName={route.name}
              color={isFocused ? "fff" : greyColor}
            />
            // <TouchableOpacity
            //
            //   accessibilityRole="button"
            //   accessibilityState={isFocused ? { selected: true } : {}}
            //   accessibilityLabel={options.tabBarAccessibilityLabel}
            //   testID={options.tabBarTestID}
            //   onPress={onPress}
            //   onLongPress={onLongPress}
            //   style={[styles.tabbarItem, { flex: 1 }]}
            // >
            //   {icons[route.name]({
            //     color: isFocused ? primaryColor : greyColor,
            //   })}
            // </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "relative",
    bottom: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderCurve: "continuous",
  },
});

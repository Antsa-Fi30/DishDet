import { useState } from "react";
import { View, StyleSheet, InteractionManager } from "react-native";
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

  const buttonWidth = dimension.width / state.routes.length;

  const onTabbarLayout = (e) => {
    setDimension({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedBg = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
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
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
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
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
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
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 30,
    borderCurve: "continuous",
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});

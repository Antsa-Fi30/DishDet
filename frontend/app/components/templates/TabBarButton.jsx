import { useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { icons } from "../../constants/IconBottomTab";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { useTheme } from "react-native-paper";

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
}) => {
  const theme = useTheme();
  const iconColor = theme.dark ? "white" : "black";
  const focusedIconColor = theme.dark ? "black" : "white";

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIcon = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.1]);

    const top = interpolate(scale.value, [0, 1], [0, 2]);

    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top,
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.tabbarItem, { flex: 1 }]}
    >
      <Animated.View style={animatedIcon}>
        {icons[routeName]({
          color: isFocused ? focusedIconColor : iconColor,
        })}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

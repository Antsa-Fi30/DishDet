// theme.js
import { DefaultTheme, DarkTheme } from "react-native-paper";

const FlatUITheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: "rgb(155, 68, 39)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 219, 208)",
    onPrimaryContainer: "rgb(58, 11, 0)",
    secondary: "rgb(119, 87, 77)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 219, 208)",
    onSecondaryContainer: "rgb(44, 22, 14)",
    tertiary: "rgb(107, 94, 47)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(244, 226, 167)",
    onTertiaryContainer: "rgb(34, 27, 0)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(32, 26, 24)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(32, 26, 24)",
    surfaceVariant: "rgb(245, 222, 215)",
    onSurfaceVariant: "rgb(83, 67, 63)",
    outline: "rgb(133, 115, 110)",
    outlineVariant: "rgb(216, 194, 188)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(54, 47, 45)",
    inverseOnSurface: "rgb(251, 238, 234)",
    inversePrimary: "rgb(255, 181, 158)",
    elevation: {
      level0: "transparent",
      level1: "rgb(250, 242, 244)",
      level2: "rgb(247, 236, 238)",
      level3: "rgb(244, 231, 231)",
      level4: "rgb(243, 229, 229)",
      level5: "rgb(241, 225, 225)",
    },
    surfaceDisabled: "rgba(32, 26, 24, 0.12)",
    onSurfaceDisabled: "rgba(32, 26, 24, 0.38)",
    backdrop: "rgba(59, 45, 41, 0.4)",
  },
};

const DarkFlatUITheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    primary: "rgb(150, 204, 255)",
    onPrimary: "rgb(0, 51, 83)",
    primaryContainer: "rgb(0, 74, 117)",
    onPrimaryContainer: "rgb(206, 229, 255)",
    secondary: "rgb(185, 200, 218)",
    onSecondary: "rgb(35, 50, 64)",
    secondaryContainer: "rgb(58, 72, 87)",
    onSecondaryContainer: "rgb(213, 228, 247)",
    tertiary: "rgb(211, 191, 230)",
    onTertiary: "rgb(56, 42, 73)",
    tertiaryContainer: "rgb(79, 64, 97)",
    onTertiaryContainer: "rgb(238, 219, 255)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(26, 28, 30)",
    onBackground: "rgb(226, 226, 229)",
    surface: "rgb(26, 28, 30)",
    onSurface: "rgb(226, 226, 229)",
    surfaceVariant: "rgb(66, 71, 78)",
    onSurfaceVariant: "rgb(194, 199, 207)",
    outline: "rgb(140, 145, 152)",
    outlineVariant: "rgb(66, 71, 78)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(226, 226, 229)",
    inverseOnSurface: "rgb(47, 48, 51)",
    inversePrimary: "rgb(0, 99, 154)",
    elevation: {
      level0: "transparent",
      level1: "rgb(32, 37, 41)",
      level2: "rgb(36, 42, 48)",
      level3: "rgb(40, 47, 55)",
      level4: "rgb(41, 49, 57)",
      level5: "rgb(43, 53, 62)",
    },
    surfaceDisabled: "rgba(226, 226, 229, 0.12)",
    onSurfaceDisabled: "rgba(226, 226, 229, 0.38)",
    backdrop: "rgba(44, 49, 55, 0.4)",
  },
};

export { FlatUITheme, DarkFlatUITheme };

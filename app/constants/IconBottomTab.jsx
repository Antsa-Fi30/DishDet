import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

const iconSize = 22;
const greyColor = "#222";

export const icons = {
  Home: (props) => (
    <Octicons name="home" size={iconSize} color={greyColor} {...props} />
  ),

  Chat: (props) => (
    <AntDesign name="message1" size={iconSize} color={greyColor} {...props} />
  ),
  Map: (props) => (
    <FontAwesome name="map-o" size={iconSize} color={greyColor} {...props} />
  ),
  Saved: (props) => (
    <Octicons name="bookmark" size={iconSize} color={greyColor} {...props} />
  ),
  Profile: (props) => (
    <Octicons name="person" size={iconSize} color={greyColor} {...props} />
  ),
};

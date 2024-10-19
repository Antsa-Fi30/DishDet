import Octicons from "@expo/vector-icons/Octicons";

const iconSize = 22;
const greyColor = "#222";

export const icons = {
  Home: (props) => (
    <Octicons name="home" size={iconSize} color={greyColor} {...props} />
  ),
  Saved: (props) => (
    <Octicons name="bookmark" size={iconSize} color={greyColor} {...props} />
  ),
  Booking: (props) => (
    <Octicons name="checklist" size={iconSize} color={greyColor} {...props} />
  ),
  Profile: (props) => (
    <Octicons name="person" size={iconSize} color={greyColor} {...props} />
  ),
};

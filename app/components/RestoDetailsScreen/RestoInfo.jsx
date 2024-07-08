import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

const RestoInfo = ({ name, address, distance, region }) => {
  const theme = useTheme();
  return (
    <View>
      <Text style={[styles.title, { color: theme.colors.primary }]}>
        {name}
      </Text>
      <View>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.info}>Distance: {distance} meters</Text>
        <Text style={styles.info}>Region: {region}</Text>
      </View>
    </View>
  );
};

export default RestoInfo;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-bold",
    fontSize: 20,
  },
  info: {
    fontFamily: "Poppins",
  },
});

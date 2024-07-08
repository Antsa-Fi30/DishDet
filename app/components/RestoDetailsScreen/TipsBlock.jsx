import { StyleSheet } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

const TipsBlock = ({ date, content }) => {
  const formatDate = (dates) => {
    const dateStr = dates;
    const dated = new Date(dateStr);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    const formattedDate = dated.toLocaleDateString("fr-FR", options);
    return formattedDate;
  };

  return (
    <Card style={{ marginVertical: 5 }}>
      <Card.Title title="Avis" left={LeftContent} />
      <Card.Content>
        <Text style={styles.date}>{formatDate(date)}</Text>
        <Text style={styles.content}>{content}</Text>
      </Card.Content>
    </Card>
  );
};

export default TipsBlock;

const styles = StyleSheet.create({
  date: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: "#dddd",
    opacity: 0.9,
  },
  content: {
    fontFamily: "Poppins",
    fontSize: 16,
    color: "#dddd",
  },
});

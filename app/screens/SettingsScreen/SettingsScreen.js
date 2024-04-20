import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Avatar, List, useTheme } from "react-native-paper";
import { Card, Text } from "react-native-paper";

const SettingsScreen = () => {
  const theme = useTheme();
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
      <Card style={{ padding: 7, marginVertical: 10 }}>
        <Card.Content>
          <List.Item
            title="Languages"
            left={(props) => <List.Icon {...props} icon="format-letter-case" />}
          />
          <List.Item
            title="Notifications"
            left={(props) => <List.Icon {...props} icon="bell" />}
          />

          <List.Item
            title="Préférences de recherche "
            left={(props) => <List.Icon {...props} icon="map-search" />}
          />
          <List.Item
            title="Accessibilité "
            left={(props) => <List.Icon {...props} icon="hand-pointing-up" />}
          />
          <List.Item
            title="Paramètres de localisation "
            left={(props) => <List.Icon {...props} icon="map-marker" />}
          />
          <List.Item
            title="Paramètres de confidentialité  "
            left={(props) => <List.Icon {...props} icon="shield-lock" />}
          />
          <List.Item
            title="Gestion des données"
            left={(props) => <List.Icon {...props} icon="database" />}
          />
          <List.Item
            title="À propos de l'application"
            left={(props) => <List.Icon {...props} icon="information" />}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
  },
});

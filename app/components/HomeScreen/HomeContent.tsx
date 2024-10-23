import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useState, useCallback, lazy, Suspense } from "react";
import NavigationBar from "./NavigationBar";

const NearbyContent = lazy(() => import("./NearbyContent"));
const Actuality = lazy(() => import("./Actuality"));

const HomeContent = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Actuality");

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar activeTab={activeTab} setActiveTab={handleTabChange} />
      <Suspense fallback={<ActivityIndicator size="large" />}>
        {activeTab === "Nearby" ? <NearbyContent /> : <Actuality />}
      </Suspense>
    </SafeAreaView>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
    paddingBottom: 15,
  },
  presentation: {
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: 25,
    marginHorizontal: 20,
  },
});

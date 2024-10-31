import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import HomeContent from "../../components/HomeScreen/HomeContent";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

const HomeScreen = () => {
  const { userToken, loading } = useContext(AuthContext);
  const [data, setData] = useState([]);

  console.log(userToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.43.205:5000/test"); // Faites une requête à la route /test
        setData(response.data);
      } catch (err) {
        console.error("Une erreur c'est produite " + err.message);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <HomeContent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

import { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);
  const [dataProm, setDataProm] = useState([]);
  const [dataMenu, setDataMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/restaurants"
        );
        setData(response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    };

    const fetchDataProm = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/promotions"
        );
        setDataProm(response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    };
    const fetchDataMenu = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/menus");
        setDataMenu(response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    };

    fetchData();
    fetchDataProm();
    fetchDataMenu();
  }, []);

  const totalRestaurants = data.length; // Nombre total de restaurants
  const activePromotions = dataProm.length; // Nombre de promotions actives
  const totalDishes = dataMenu.length; // Nombre total de plats dans les menus
  const appUsageRate = 75; // Taux d'utilisation de l'application (en %)

  return (
    <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
      <h2>Vue d'ensemble des statistiques clés</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <strong>Nombre total de restaurants :</strong> {totalRestaurants}
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <strong>Nombre de promotions actives :</strong> {activePromotions}
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <strong>Nombre de plats dans les menus :</strong> {totalDishes}
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <strong>Taux d'utilisation de l'application :</strong> {appUsageRate}%
        </div>
      </div>
    </div>
  );
};

export default Data;

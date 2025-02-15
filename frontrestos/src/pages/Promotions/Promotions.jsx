/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";

import "./Promotions.css";

const Promotions = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/promotions");
      console.log(response);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/promotions/${id}`);
      setData(data.filter((d) => d._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  if (loading) {
    return (
      <div className="🤚">
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="👉"></div>
        <div className="🌴"></div>
        <div className="👍"></div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <div className="mb-4">
        <button id="bottone1" onClick={() => navigate("/addpromotion")}>
          <strong>Ajouter une promotion a un restaurant</strong>
        </button>
      </div>
      <table className="min-w-full bg-transparent rounded-">
        <thead>
          <tr>
            <th className="py-2 px-4 ">ID</th>
            <th className="py-2 px-4 ">Restaurant</th>
            <th className="py-2 px-4 ">Description</th>
            <th className="py-2 px-4 ">Date de début(année,mois,jour)</th>
            <th className="py-2 px-4 ">Date de fin(année,mois,jour)</th>
            <th className="py-2 px-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-2 ">{item.id}</td>
              <td className="py-2 px-4 justify-center text-center">
                {item.restaurantID}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.description}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {formatDate(item.dateStart)}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {formatDate(item.dateEnd)}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg m-2 duration-200 transition-all hover:bg-red-700"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Promotions;

/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";

import "./Persons.css";

const Persons = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/persons");
      console.log(response);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setLoading(false);
    }
  };

  const fetchUnit = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/unite/${id}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUnit();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/persons/${id}`);
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
    <div>
      <div className="mb-4">
        <button id="bottone1" onClick={() => navigate("/addperson")}>
          <strong>Ajouter une personne</strong>
        </button>
      </div>
      <table className="min-w-full bg-transparent rounded-">
        <thead>
          <tr>
            <th className="py-2 px-4 ">Nom</th>
            <th className="py-2 px-4 ">Qualité</th>
            <th className="py-2 px-4 ">Units</th>
            <th className="py-2 px-4 ">Date de naissance(année,mois,jour)</th>
            <th className="py-2 px-4 ">Date de départ(année,mois,jour)</th>
            <th className="py-2 px-4 ">Date d'arrivé(année,mois,jour)</th>
            <th className="py-2 px-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-2 ">
                {item.FirstName} {item.LastName}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.Quality}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.Units ? item.Units.intitule : "N/A"}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {formatDate(item.birthDate)}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {formatDate(item.startDate)}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {formatDate(item.endDate)}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                <button
                  onClick={() => navigate(`/editperson/${item._id}`)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg m-2 duration-200 transition-all hover:bg-yellow-700"
                >
                  Modifier
                </button>
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

export default Persons;

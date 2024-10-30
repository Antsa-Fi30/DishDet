/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";

import "./Unite.css";

const Users = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState("");
  const [selectedUnitsPerson, setSelectedUnitsPerson] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setLoading(false);
    }
  };
  const fetchUnitPersons = async (unitId) => {
    try {
      console.log(selectedUnitsPerson);
      const response = await axios.get(
        `http://localhost:5000/api/unite/${unitId}/persons`
      );
      console.log(response);
      setSelectedUnitsPerson(response.data || []);
    } catch (error) {
      console.error(error.response ? error.response.data1 : error.message);
      setSelectedUnitsPerson([]);
    }
  };

  //Mise a jour de l'unite selectionnee
  const handleUnitChange = (e) => {
    const unitId = e.target.value;
    console.log(unitId);
    setSelectedUnits(unitId);
    fetchUnitPersons(unitId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteunite/${id}`);
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
      <div>
        <table className="min-w-full bg-transparent rounded-">
          <thead>
            <tr>
              <th className="py-2 px-4 ">Id</th>
              <th className="py-2 px-4 ">Nom</th>
              <th className="py-2 px-4 ">Email</th>
              <th className="py-2 px-4 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-2 ">{item.id}</td>
                <td className="py-2 px-4 justify-center text-center">
                  {item.name}
                </td>
                <td className="py-2 px-4 justify-center text-center">
                  {formatDate(item.email)}
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
    </div>
  );
};

export default Users;

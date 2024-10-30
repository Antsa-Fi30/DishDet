/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";

import "./Unite.css";

const Unite = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState("");
  const [selectedUnitsPerson, setSelectedUnitsPerson] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/unites");
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
        <div className="mb-4">
          <button id="bottone1" onClick={() => navigate("/addUnite")}>
            <strong>Ajouter une unité</strong>
          </button>
        </div>
        <table className="min-w-full bg-transparent rounded-">
          <thead>
            <tr>
              <th className="py-2 px-4 ">Numero</th>
              <th className="py-2 px-4 ">Intitulé</th>
              <th className="py-2 px-4 ">
                Date de propostion(année,mois,jour)
              </th>
              <th className="py-2 px-4 ">Date de création(année,mois,jour)</th>
              <th className="py-2 px-4 ">Date de départ(année,mois,jour)</th>
              <th className="py-2 px-4 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-2 ">{item.numero}</td>
                <td className="py-2 px-4 justify-center text-center">
                  {item.intitule}
                </td>
                <td className="py-2 px-4 justify-center text-center">
                  {formatDate(item.propDate)}
                </td>
                <td className="py-2 px-4 justify-center text-center">
                  {formatDate(item.createdDate)}
                </td>
                <td className="py-2 px-4 justify-center text-center">
                  {formatDate(item.closeDate)}
                </td>
                <td className="py-2 px-4 justify-center text-center">
                  <button
                    onClick={() => navigate(`/editUnite/${item._id}`)}
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
      <div className="mt-4">
        <div>
          <span className="textgrad text-2xl font-bold">
            Les personnes dans une unités
          </span>
        </div>
        <div className="mt-6">
          <select
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required=""
            name="Units"
            id="Units"
            value={selectedUnits}
            onChange={handleUnitChange}
          >
            {data.map((unit) => (
              <option key={unit._id} value={unit._id}>
                {unit.intitule}
              </option>
            ))}
          </select>
        </div>

        <main className="flex-1 p-4 bg-gray-100">
          {/* <h2 className="text-2xl font-semibold mb-4">{}</h2> */}
          <div className="w-content">
            <div className="bg-gray-100 p-4 rounded shadow">
              <ul>
                {Array.isArray(selectedUnitsPerson) &&
                  selectedUnitsPerson.map((person) => (
                    <li key={person._id}>
                      {person.FirstName} {person.LastName} - {person.Quality}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Unite;

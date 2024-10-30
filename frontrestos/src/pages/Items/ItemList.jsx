import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";

const ItemList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/items");
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
      await axios.delete(`http://localhost:5000/api/item/${id}`);
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
        <button id="bottone1" onClick={() => navigate("/additem")}>
          <strong>Ajouter une Adresse</strong>
        </button>
      </div>
      <table className="min-w-full bg-transparent rounded-">
        <thead>
          <tr>
            <th className="py-2 px-4 ">codeType</th>
            <th className="py-2 px-4 ">adressePostal</th>
            <th className="py-2 px-4 ">email</th>
            <th className="py-2 px-4 ">tel</th>
            <th className="py-2 px-4 ">organisme</th>
            <th className="py-2 px-4 ">delegationRegionale</th>
            <th className="py-2 px-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-2 ">{item.codeType}</td>
              <td className="py-2 px-4 justify-center text-center">
                {item.adressePostal}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.email}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.tel}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.organisme}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.delegationRegionale}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                <button
                  onClick={() => navigate(`/edititem/${item._id}`)}
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

export default ItemList;

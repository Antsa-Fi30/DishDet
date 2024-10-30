import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";

const MenuList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/menus");
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
    <div style={{ fontFamily: "Poppins" }}>
      <div className="mb-4">
        <button id="bottone1" onClick={() => navigate("/additem")}>
          <strong>Ajouter une plat à un restaurant</strong>
        </button>
      </div>
      <table className="min-w-full bg-transparent rounded-">
        <thead>
          <tr>
            <th className="py-2 px-4 ">id</th>
            <th className="py-2 px-4 ">Restaurant</th>
            <th className="py-2 px-4 ">Nom du Plat</th>
            <th className="py-2 px-4 ">Description</th>
            <th className="py-2 px-4 ">Prix (Ar)</th>
            <th className="py-2 px-4 ">Categorie</th>
            <th className="py-2 px-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-2 justify-center text-center">{item.id}</td>
              <td className="px-2 justify-center text-center">
                {item.restaurantId}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.itemName}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.description}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.price}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.categorie}
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

export default MenuList;

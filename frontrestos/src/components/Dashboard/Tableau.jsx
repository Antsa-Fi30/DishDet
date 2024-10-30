import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Tableau = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/restaurants");
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
      await axios.delete(`http://localhost:5000/api/deleterse/${id}`);
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
      <table className="min-w-full bg-transparent rounded-">
        <thead>
          <tr>
            <th className="py-2 px-4 ">ID</th>
            <th className="py-2 px-4 ">Name</th>
            <th className="py-2 px-4 ">Coordonnées</th>
            <th className="py-2 px-4 ">reservations</th>
            <th className="py-2 px-4 ">cuisineType</th>
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
                {item.latitude} , {item.longitude}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.reservations}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                {item.cuisineType}
              </td>
              <td className="py-2 px-4 justify-center text-center">
                <button
                  onClick={() => navigate(`/editrestos/${item._id}`)}
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

export default Tableau;

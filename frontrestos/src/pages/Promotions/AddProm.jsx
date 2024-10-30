import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddProm.css";

const AddProm = () => {
  const navigate = useNavigate();
  const [Restos, setRestos] = useState([]);
  const [selectedRestos, setSelectedRestos] = useState();
  const [promos, setPromos] = useState({
    restaurantID: selectedRestos,
    description: "",
    dateStart: "",
    dateEnd: "",
  });

  const handleChange = (e) => {
    setPromos({ ...promos, [e.target.name]: e.target.value });
  };

  const handleUnitChange = (e) => {
    const restaurantID = e.target.value;
    setSelectedRestos(restaurantID),
      setPromos({ ...promos, Restos: restaurantID });
  };

  useEffect(() => {
    const fetchUnite = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/restaurants"
        );
        setRestos(response.data);
      } catch (err) {
        console.error("Error adding promos:", err);
      }
    };
    fetchUnite();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/promoss", promos);
      navigate("/promoss");
    } catch (error) {
      console.error("Error adding promos:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center py-5 sm:px-6 lg:px-8">
        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="glass py-5 px-4 shadow sm:rounded-lg sm:px-10">
            <button id="button" onClick={() => navigate(-1)}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </span>
            </button>

            <div className="my-3 textgrad font-bold text-3xl">
              Ajouter une Promotion
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    autoComplete="description"
                    type="text"
                    name="description"
                    id="description"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <select
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required=""
                  name="Restos"
                  id="Restos"
                  onChange={handleUnitChange}
                >
                  <option value="" disabled>
                    Sélectionner une Unité
                  </option>
                  {Restos.map((unit) => (
                    <option key={unit.id} value={unit._id}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="dateStart"
                >
                  Date de début du promotion
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    type="date"
                    name="dateStart"
                    id="dateStart"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="dateEnd"
                >
                  Date de fin du promotion
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    type="date"
                    name="dateEnd"
                    id="dateEnd"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className="shadow__btn w-full">
                  Enregistrer
                </button>
              </div>
              <div className="mt-6">
                <button type="reset" className="shadow1__btn w-full">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProm;

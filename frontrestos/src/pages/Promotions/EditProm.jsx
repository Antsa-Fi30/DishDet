// src/components/EditProm.js
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddProm.css";
import { formatDate } from "../../utils/formatDate";

const EditProm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [restos, setRestos] = useState([]);
  const [selectedRestos, setSelectedRestos] = useState();
  const [promo, setPromo] = useState({
    restaurantID: selectedRestos.id,
    description: "",
    dateStart: "",
    dateEnd: "",
  });

  useEffect(() => {
    const fetchRestos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/restaurants"
        );
        setRestos(response.data);
      } catch (err) {
        console.error("Error adding promo:", err);
      }
    };
    const fetchpromo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/promo/${id}`
        );
        setPromo(response.data);
        console.log();
      } catch (error) {
        console.error("Error fetching promo data:", error);
      }
    };
    fetchRestos();
    fetchpromo();
  }, [id]);

  const handleChange = (e) => {
    setPromo({ ...promo, [e.target.name]: e.target.value });
  };

  const handleUnitChange = (e) => {
    const UnitId = e.target.value;
    setSelectedRestos(UnitId), setPromo({ ...promo, Restos: UnitId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/promos/${id}`, promo);
      navigate("/promos");
    } catch (error) {
      console.error("Error updating promo:", error);
    }
  };

  console.log(restos);

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
              Modifier une promone
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="FirstName"
                >
                  Nom
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    autoComplete="FirstName"
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    value={promo.FirstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="LastName"
                >
                  Prénom
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    autoComplete="LastName"
                    type="text"
                    name="LastName"
                    id="LastName"
                    value={promo.LastName}
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
                  value={promo.Restos}
                  onChange={handleUnitChange}
                >
                  {restos.map((unit) => (
                    <option key={unit._id} value={unit._id}>
                      {unit.intitule}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="birthDate"
                >
                  Date de naissance
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    value={formatDate(promo.birthDate)}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="startDate"
                >
                  Date d'arrivée
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    type="date"
                    name="startDate"
                    id="startDate"
                    value={formatDate(promo.startDate)}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="endDate"
                >
                  Date de départ
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    type="date"
                    name="endDate"
                    id="endDate"
                    value={formatDate(promo.endDate)}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center mt-6">
                <span className="mr-3 text-gray-700 font-medium">Qualité:</span>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-pink-600"
                    name="Quality"
                    value="M"
                    checked={promo.Quality === "M"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">M</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-purple-600"
                    name="Quality"
                    value="Mme"
                    checked={promo.Quality === "Mme"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Mme</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-purple-600"
                    name="Quality"
                    value="Mlle"
                    checked={promo.Quality === "Mlle"}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-gray-700">Mlle</span>
                </label>
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

export default EditProm;

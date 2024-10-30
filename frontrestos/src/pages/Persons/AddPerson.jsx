import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddPerson.css";

const AddPerson = () => {
  const navigate = useNavigate();
  const [units, setUnits] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState();
  const [person, setPerson] = useState({
    FirstName: "",
    LastName: "",
    Quality: "",
    birthDate: "",
    startDate: "",
    endDate: "",
    Units: selectedUnits,
  });

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleUnitChange = (e) => {
    const UnitId = e.target.value;
    setSelectedUnits(UnitId), setPerson({ ...person, Units: UnitId });
  };

  useEffect(() => {
    const fetchUnite = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/unites");
        setUnits(response.data);
      } catch (err) {
        console.error("Error adding person:", err);
      }
    };
    fetchUnite();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/persons", person);
      navigate("/persons");
    } catch (error) {
      console.error("Error adding person:", error);
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
              Ajouter une personne
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
                    required=""
                    autoComplete="FirstName"
                    type="text"
                    name="FirstName"
                    id="FirstName"
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
                    required=""
                    autoComplete="LastName"
                    type="text"
                    name="LastName"
                    id="LastName"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <select
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required=""
                  name="Units"
                  id="Units"
                  onChange={handleUnitChange}
                >
                  <option value="">Sélectionner une Unité</option>
                  {units.map((unit) => (
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
                    required=""
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="startDate"
                >
                  Date d'arrivé
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    type="date"
                    name="startDate"
                    id="startDate"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="endDate"
                >
                  Date de depart
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    type="date"
                    name="endDate"
                    id="endDate"
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

export default AddPerson;

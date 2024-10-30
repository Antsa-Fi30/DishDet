import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddUnite.css";
import { formatDate } from "../../utils/formatDate";

const EditUnite = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Unite, setUnite] = useState({
    numero: "",
    intitule: "",
    propDate: "",
    createdDate: "",
    closeDate: "",
  });

  useEffect(() => {
    const fetchUnite = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/unite/${id}`
        );
        setUnite(response.data);
      } catch (error) {
        console.error("Error fetching person data:", error);
      }
    };
    fetchUnite();
  }, [id]);

  console.log(Unite);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnite((prevItems) => ({
      ...prevItems,
      [name]: name === "numero" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/updateunite/${id}`, Unite);
      navigate("/unite");
    } catch (error) {
      console.error("Error adding Unite:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center sm:px-6 lg:px-8">
        <div className="w-full">
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
              Modifier une Unité
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="numero"
                >
                  Numero
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    autoComplete="numero"
                    type="number"
                    name="numero"
                    id="numero"
                    value={Unite.numero}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="intitule"
                >
                  Intitulé
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    autoComplete="intitule"
                    type="text"
                    name="intitule"
                    id="intitule"
                    value={Unite.intitule}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="propDate"
                >
                  Date de proposition
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    type="date"
                    name="propDate"
                    id="propDate"
                    value={formatDate(Unite.propDate)}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="createdDate"
                >
                  Date de création
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    type="date"
                    name="createdDate"
                    id="createdDate"
                    value={formatDate(Unite.createdDate)}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="closeDate"
                >
                  Date de fermeture
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    type="date"
                    name="closeDate"
                    id="closeDate"
                    value={formatDate(Unite.closeDate)}
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

export default EditUnite;

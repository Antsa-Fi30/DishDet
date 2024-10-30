import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MenuForm = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState({
    codeType: "Principale",
    adressePostal: "",
    email: "",
    tel: "",
    organisme: "",
    delegationRegionale: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItems((prevItems) => ({
      ...prevItems,
      [name]:
        name === "adressePostal" || name === "tel" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting items:", items);
      await axios.post("http://localhost:5000/api/addmenu", items);
      navigate("/items");
    } catch (error) {
      console.error("Error adding items:", error);
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
              Ajouter une adresse
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <div className="">
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="codeType"
                >
                  Type
                </label>
                <select
                  name="codeType"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  id="codeType"
                  value={items.codeType}
                  onChange={handleChange}
                >
                  <option value="Principale">Principale</option>
                  <option value="Secondaire">Secondaire</option>
                </select>
              </div>
              <div className="">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="adressePostal"
                >
                  Adresse Postal
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    autoComplete="adressePostal"
                    type="number"
                    name="adressePostal"
                    id="adressePostal"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    autoComplete="email"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="tel"
                >
                  Téléphone
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    autoComplete="tel"
                    type="number"
                    name="tel"
                    id="tel"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="organisme"
                >
                  Organisme
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    autoComplete="organisme"
                    type="text"
                    name="organisme"
                    id="organisme"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="delegationRegionale"
                >
                  Delegation Regionale
                </label>
                <div className="my-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required=""
                    autoComplete="delegationRegionale"
                    type="text"
                    name="delegationRegionale"
                    id="delegationRegionale"
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

export default MenuForm;

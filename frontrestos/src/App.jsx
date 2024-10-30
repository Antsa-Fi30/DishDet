import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProm from "./pages/Promotions/AddProm";
import EditProm from "./pages/Promotions/EditProm";
import Promotions from "./pages/Promotions/Promotions";
import MenuList from "./pages/Menus/MenuList";
import MenuForm from "./pages/Menus/MenuForm";
import Users from "./pages/Users/Users";
import AddUser from "./pages/Users/AddUser";
import Bookings from "./pages/Bookings/Bookings";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-1">
            <aside className="bg-gray-800 text-white w-60 p-4">
              <nav>
                <ul>
                  <li className="mb-2">
                    <Link
                      to="/"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Tableau de bord
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/menus"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Plats
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/promotions"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Promotions
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/users"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Utilisateurs
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/bookings"
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      Reservations
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <main className="flex-1 p-4 bg-gray-100">
              {/* <h2 className="text-2xl font-semibold mb-4">{}</h2> */}
              <div className="w-content">
                <div className="bg-gray-100 p-4 rounded shadow">
                  <Routes>
                    {/* Promotions */}
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/editpromotion/:id" element={<EditProm />} />
                    <Route path="/addpromotion" element={<AddProm />} />
                    <Route path="/promotions" element={<Promotions />} />
                    {/* Menus */}
                    <Route path="/menus" element={<MenuList />} />
                    <Route path="/addmenu" element={<MenuForm />} />
                    {/* Utilisateurs */}
                    <Route path="/users" element={<Users />} />
                    <Route path="/addusers" element={<AddUser />} />
                    {/* Reservations */}
                    <Route path="/bookings" element={<Bookings />} />
                  </Routes>
                </div>
              </div>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

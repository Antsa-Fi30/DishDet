import { useEffect } from "react";
import Data from "../../components/Dashboard/Data";
import Tableau from "../../components/Dashboard/Tableau";

const Dashboard = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <Data />
        <Tableau />
      </div>
    </div>
  );
};

export default Dashboard;

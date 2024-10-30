import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { euler } from "../../utils/eulerAlgo";
import { useState, useEffect } from "react";
import axios from "axios";

const EulerUnite = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/unites");
      setData(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const nummberOfUnity = data.length;

  useEffect(() => {
    fetchData();
  }, []);

  const t0 = 0;
  const P0 = 0;
  const n = 10;
  const h = 0.5;

  const recrutement = (t) => nummberOfUnity;
  const depart = (t) => 0;

  const resultats = euler(t0, P0, h, n, recrutement, depart);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={resultats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="t"
          label={{ value: "Time", position: "insideBottomRight", offset: 0 }}
        />
        <YAxis label={{ value: "Unite", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="w"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EulerUnite;

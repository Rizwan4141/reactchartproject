import React from "react";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import Home from "./Components/Home";
// import "./Home.css";
const pdata = [
  {
    name: "python",
    student: 13,
    fees: 10,
  },
  {
    name: "javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 16,
    fees: 4,
  },
  {
    name: "C",
    student: 14,
    fees: 8,
  },
  {
    name: "C++",
    student: 11,
    fees: 9,
  },
];

const App = () => {
  return (
    <div>
      <h1 className="chart-heading">Line charts</h1>
      {/* <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata}>
          <Line dataKey="student" />
        </LineChart>
      </ResponsiveContainer> */}
      <Home/>
    </div>
  );
};

export default App;

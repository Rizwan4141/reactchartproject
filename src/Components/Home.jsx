import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip, Bar,BarChart,AreaChart,Area
} from "recharts";

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
  {
    name: "C++",
    student: 6,
    fees: 9,
  },
];

const Home = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" interval={"preserveStartEnd"} tickFormatter={(value)=>value+" programing"}/>   //interval
          <YAxis />
          <Tooltip contentStyle={{backgroundColor:"yellow"}}/>
          
          <Legend/>
          <Line type="monotone" dataKey="student" stroke="red"  activeDot={{r:8}}/>
          <Line dataKey="fees" stroke="green" activeDot={{r:8}}/>
        </LineChart>
      </ResponsiveContainer>
      
      <h1>Area Charts</h1> 
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" />   //interval
          <YAxis />
          <Tooltip/>
          <Legend/>
         <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#88884d8" />
        </AreaChart>
      </ResponsiveContainer>

      <h1>Bar Charts</h1> 
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" />   //interval
          <YAxis />
          <Tooltip/>
          <Legend/>
         <Bar  dataKey="student"  fill="#88884d8" />
         <Bar  dataKey="fees"  fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Home;

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



// const data = [
//   { date: '2023-10-01', uv: 0, pv: 2400, amt: 2400 },
//   { date: '2023-10-02', uv: 0, pv: 1398, amt: 2210 },
//   { date: '2023-10-03', uv: 0, pv: 9800, amt: 2290 },
//   { date: '2023-10-04', uv: 0, pv: 3908, amt: 2000 },
//   { date: '2023-10-05', uv: 0, pv: 4800, amt: 2181 },
// ]; 

const data = [
  { date: '2023-10-01', value: 0 },
  { date: '2023-10-02', value: 1 },
  { date: '2023-10-03', value: 2 },
  { date: '2023-10-04', value: 3 },
];

const Charts = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          {/* <CartesianGrid stroke="#ccc" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};



// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const data = [
//   { date: '2023-10-01', value: 0 },
//   { date: '2023-10-02', value: 1 },
//   { date: '2023-10-03', value: 2 },
//   { date: '2023-10-04', value: 3 },
// ];

// const Charts = () => (
//   <div style={{ width: '800px', margin: '0 auto' }}>
//     <h1>Date vs Value Chart</h1>
//     <LineChart width={800} height={400} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="date" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Line type="monotone" dataKey="value" stroke="blue" />
//     </LineChart>
//   </div>
// );

// export default Charts;
export default Charts;
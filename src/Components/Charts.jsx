
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data with views, watch time, and subscribers
const data = [
  { date: '2023-10-01', views: 30, watchTime: 20, subscribers: 10 },
  { date: '2023-10-02', views: 30, watchTime: 20, subscribers: 10 },
  { date: '2023-10-03', views: 30, watchTime: 20, subscribers: 10 },
  { date: '2023-10-04', views: 30, watchTime: 20, subscribers: 10 },
  { date: '2023-10-05', views: 30, watchTime: 20, subscribers: 10 },
];

const Charts = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          {/* Add lines for each metric */}
          <Line type="monotone" dataKey="views" stroke="#ffff" name="Views" />
          <Line type="monotone" dataKey="watchTime" stroke="#ffff" name="Watch Time (hours)" />
          <Line type="monotone" dataKey="subscribers" stroke="#ffff" name="Subscribers" />

          {/* Add grid lines */}
          {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}

          {/* Configure X-axis to show dates */}
          <XAxis dataKey="date" />

          {/* Configure Y-axis */}
          <YAxis />

          {/* Add tooltip for hover details */}
          <Tooltip />

          {/* Add legend to identify lines */}
          {/* <Legend /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
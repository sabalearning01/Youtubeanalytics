
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { date: '06 Feb 2..', views: 30, watchTime: 20, subscribers: 10 },
  { date: '11 Feb 2...', views: 30, watchTime: 20, subscribers: 10 },
  { date: '15 Feb 2025', views: 30, watchTime: 20, subscribers: 10 },
  { date: '20 Feb 2025', views: 30, watchTime: 20, subscribers: 10 },
  { date: '24 Feb 2025', views: 30, watchTime: 20, subscribers: 10 },
  { date: '24 Feb 2', views: 30, watchTime: 20, subscribers: 10 },
  
];

const Charts = () => {
  return (
    <div style={{ width: '100%', height: 200 }}>
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
          <YAxis orientation="right" ticks={[3,2,1,0]}/>

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
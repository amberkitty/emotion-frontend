import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '12h', value: 20 },
  { time: '10h', value: 30 },
  { time: '8h', value: 40 },
  { time: '6h', value: 35 },
  { time: '4h', value: 50 },
  { time: '2h', value: 65 },
  { time: 'Now', value: 82 },
];

const SentimentChart = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Sentiment Over Time</h2>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={mockData}>
        <XAxis dataKey="time" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#00FFA3" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SentimentChart;

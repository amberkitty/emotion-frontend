import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '10:00', score: 40 },
  { time: '11:00', score: 55 },
  { time: '12:00', score: 68 },
  { time: '13:00', score: 74 },
  { time: '14:00', score: 82 },
];

export default function SentimentChart() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg h-64">
      <div className="text-sm text-gray-400 mb-2">Sentiment Over Time</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

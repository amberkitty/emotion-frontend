import React from 'react';

const signals = [
  { time: '12:14 PM', action: 'LONG SOL' },
  { time: '12:00 AM', action: 'LONG SOL' },
  { time: '10:38 AM', action: 'BEARISH SIGNAL' },
];

const TradeSignals = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Trade Signals</h2>
    <ul className="space-y-2 text-sm">
      {signals.map((s, i) => (
        <li key={i} className="flex justify-between">
          <span className="text-gray-400">{s.time}</span>
          <span className="text-green-400">{s.action}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TradeSignals;

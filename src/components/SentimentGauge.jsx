import React from 'react';

const getLabel = (score) => {
  if (score >= 70) return 'Bullish';
  if (score >= 30) return 'Neutral';
  return 'Bearish';
};

const SentimentGauge = ({ score }) => {
  const label = getLabel(score);
  const color = score >= 70 ? 'green' : score >= 30 ? 'yellow' : 'red';

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Market Sentiment</h2>
      <div className="flex flex-col items-center">
        <div className={`text-4xl font-bold text-${color}-400`}>{score}</div>
        <div className="text-sm text-gray-400 mt-2">{label}</div>
        <div className="flex gap-2 text-xs mt-3">
          <span className="text-red-400">Bearish</span>
          <span className="text-yellow-300">Neutral</span>
          <span className="text-green-400">Bullish</span>
        </div>
      </div>
    </div>
  );
};

export default SentimentGauge;

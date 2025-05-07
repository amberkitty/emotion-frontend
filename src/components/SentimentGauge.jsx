export default function SentimentGauge({ score }) {
    let label = "Neutral", color = "text-yellow-400";
    if (score >= 70) { label = "Bullish"; color = "text-green-400"; }
    else if (score <= 30) { label = "Bearish"; color = "text-red-400"; }
  
    return (
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
        <div className={`text-5xl font-bold ${color}`}>{score}</div>
        <div className={`text-xl mt-2 ${color}`}>{label}</div>
        <div className="mt-4 text-sm text-gray-400">Current Market Sentiment</div>
      </div>
    );
  }
  
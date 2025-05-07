export default function TradeSignals() {
    const signals = [
      { time: '14:22', action: 'LONG', asset: '$SOL' },
      { time: '13:00', action: 'SHORT', asset: '$JTO' },
    ];
    return (
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="text-sm text-gray-400 mb-4">Trade Signals</div>
        <ul className="space-y-2 text-sm">
          {signals.map((s, i) => (
            <li key={i} className="flex justify-between">
              <span>{s.time}</span>
              <span className={`font-bold ${s.action === 'LONG' ? 'text-green-400' : 'text-red-400'}`}>{s.action} {s.asset}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
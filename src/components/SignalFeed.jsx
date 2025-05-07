export default function SignalFeed({ signals }) {
    return (
      <div className="bg-slate-900 rounded-xl p-6 shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4">Trade Signals</h2>
        <ul className="text-sm text-white space-y-2">
          {signals.map((sig, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{sig.time}</span>
              <span className={sig.type === 'LONG' ? 'text-green-400' : 'text-red-400'}>
                {sig.type} {sig.asset}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
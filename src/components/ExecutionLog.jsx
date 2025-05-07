export default function ExecutionLog() {
    const logs = [
      { time: '13:40', asset: 'SOL', status: 'Success' },
      { time: '13:20', asset: 'JTO', status: 'Success' },
    ];
    return (
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="text-sm text-gray-400 mb-4">Execution Log</div>
        <ul className="space-y-2 text-sm">
          {logs.map((log, i) => (
            <li key={i} className="flex justify-between">
              <span>{log.time}</span>
              <span>{log.asset}</span>
              <span className="text-green-400">{log.status}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
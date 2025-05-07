export default function ExecutionTable({ logs }) {
    return (
      <div className="bg-slate-900 rounded-xl p-6 shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4">Execution Log</h2>
        <table className="w-full text-sm text-white">
          <thead className="text-gray-400">
            <tr>
              <th>Time</th><th>Asset</th><th>Tx Hash</th><th>Result</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr key={idx} className="border-t border-slate-700">
                <td>{log.time}</td>
                <td>{log.asset}</td>
                <td className="truncate">{log.tx.slice(0, 6)}...{log.tx.slice(-4)}</td>
                <td className={log.result === 'Success' ? 'text-green-400' : 'text-red-400'}>
                  {log.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
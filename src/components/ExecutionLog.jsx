import React from 'react';

const logs = [
  { time: '12:14 PM', asset: 'SOL', hash: '8oDL...JtCZ', result: 'Success' },
  { time: '11:00 AM', asset: 'SOL', hash: '8oDL...JtCZ', result: 'Success' },
  { time: '9:45 AM', asset: 'SOL', hash: 'GsNp...VQvB', result: 'Success' },
];

const ExecutionLog = () => (
  <div className="bg-gray-800 p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Execution Log</h2>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-gray-400">
          <th className="text-left">Time</th>
          <th>Asset</th>
          <th>Action</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, idx) => (
          <tr key={idx} className="border-t border-gray-700">
            <td>{log.time}</td>
            <td>{log.asset}</td>
            <td>{log.hash}</td>
            <td className="text-green-400">{log.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExecutionLog;

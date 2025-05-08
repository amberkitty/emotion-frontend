import React, { useState } from 'react';

const SimulationToggle = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow flex items-center justify-between">
      <span className="text-lg font-semibold">Simulation Mode</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 rounded-full relative transition ${
          enabled ? 'bg-green-500' : 'bg-gray-600'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition ${
            enabled ? 'translate-x-6' : ''
          }`}
        />
      </button>
    </div>
  );
};

export default SimulationToggle;

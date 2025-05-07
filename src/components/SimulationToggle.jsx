export default function SimulationToggle() {
    return (
      <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-between text-sm">
        <span className="text-gray-400">Simulation Mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-600 peer-checked:bg-green-500 rounded-full peer" />
        </label>
      </div>
    );
  }
  
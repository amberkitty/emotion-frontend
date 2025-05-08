import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard';
import { SolanaWalletProvider } from './components/WalletProvider';

function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 text-white font-sans">
      <SolanaWalletProvider>
      <Dashboard />
      </SolanaWalletProvider>
    </div>
  )
}

export default App

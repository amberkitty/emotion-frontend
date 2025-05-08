import SentimentGauge from '../components/SentimentGauge';
import SentimentChart from '../components/SentimentChart';
import TradeSignals from '../components/TradeSignals';
import ExecutionLog from '../components/ExecutionLog';
import SimulationToggle from '../components/SimulationToggle';
import AccountBalance from '../components/AccountBalance';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export default function Dashboard() {
  const sampleScore = 82;
  const sampleSignals = [
    { time: '12:14 PM', type: 'LONG', asset: 'SOL' },
    { time: '10:38 AM', type: 'SHORT', asset: 'WIF' },
  ];
  const sampleLogs = [
    { time: '12:14 PM', asset: 'SOL', tx: '8oDL...JtCZ', result: 'Success' },
  ];

  return (
    // <div className="min-h-screen bg-gray-900 text-white p-6">
    //   <h1 className="text-2xl font-bold mb-6">EmotionTrade Dashboard</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     <SentimentGauge score={82} />
    //     <SentimentChart />
    //     <TradeSignals />
    //     <ExecutionLog />
    //     <SimulationToggle />
    //   </div>
    // </div>
    <div className="min-h-screen w-full bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">EmotionTrade Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <WalletMultiButton className="mb-4" /> */}
        <AccountBalance />
        <SentimentGauge score={82} />
        <SentimentChart />
        <TradeSignals />
        <ExecutionLog />
        <SimulationToggle />
      </div>
    </div>
  );
}

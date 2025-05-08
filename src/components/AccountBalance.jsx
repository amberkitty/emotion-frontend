import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


const AccountBalance = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!publicKey) return;
      const lamports = await connection.getBalance(publicKey);
      setBalance(lamports / 1e9); // Convert to SOL
    };

    fetchBalance();
  }, [publicKey, connection]);

  return (
    
    <div className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-start justify-center">
        <WalletMultiButton className="mb-4" />
      <h2 className="text-sm text-gray-400 mb-1">Account Balance</h2>
      {publicKey ? (
        <div className="text-2xl font-bold text-green-400">
          {balance?.toFixed(4)} SOL
        </div>
      ) : (
        <div className="text-gray-400 text-sm">Wallet not connected</div>
      )}
    </div>
  );
};

export default AccountBalance;

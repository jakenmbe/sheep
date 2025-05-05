"use client"; // Mark as Client Component

import Link from "next/link"
import { useState } from 'react'; // Import useState
import { useAccount } from 'wagmi'; // Import useAccount
import { WolfCard } from './wolf-card'; // Import WolfCard

export default function WolfNFTPage() {
  const { isConnected } = useAccount(); // Get connection status
  const [wolfBalance, setWolfBalance] = useState(0); // Initialize wolfBalance state (replace with API call later)

  // TODO: Replace the above line with an effect to fetch wolf balance from API when isConnected changes
  // useEffect(() => {
  //   if (isConnected) {
  //     // fetchWolfBalance().then(balance => setWolfBalance(balance));
  //   }
  // }, [isConnected]);

  return (
    <div className="mb-4 space-y-8 px-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-bubbles text-4xl">Wolves</h1><Link href="/wolf/check">Check Wolf NFT</Link>
      </div>
      <p className="max-w-[560px] text-lg">A Wolf NFT lets you eat sheep from other balances and LPs. Eating sheep burns them
        from the total supply of sheep, but if you eat from other balances (not the LP) this grants you 25% of the
        amount eaten. Each Wolf costs 100S and increasing amount of SHEEP.</p>
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Your wolves</h2>
        <div className="space-y-5">
          {!isConnected ? (
            <p className="max-w-[560px] text-lg">Connect your wallet to view your wolves.</p>
          ) : (
            <>
              {wolfBalance === 0 && (
                <p className="max-w-[560px] text-lg">You don't have any wolves yet. Mint your first wolf to get started!</p>
              )}
              <div className="flex justify-center">
                <WolfCard />
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

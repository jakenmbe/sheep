import { Navbar } from '@/components/navbar';

export default function DocsPage() {
  return (
    <div className='mb-4 space-y-8 px-4'>
      <h1 className='font-bubbles text-4xl'>
        Sheep Coin: A Blockchain-Based Game Economy
      </h1>
      <section className='space-y-4'>
        <h2 className='text-primary text-2xl font-semibold'>
          Liquidity Generation Event (LGE)
        </h2>
        <ul className='list-inside list-disc space-y-2'>
          <li>Buy Sheep Coin at a 1:1 ratio with Sonic Token.</li>
          <li>
            The Sonic Token value doesn't matter; only the quantity counts.
          </li>
          <li>
            95% of Sonic Tokens from pre-sale provide liquidity for Sheep Coin.
          </li>
          <li>
            The liquidity pool will be available on DEX platforms like Shadow,
            Equalizer, and SwapX.
          </li>
        </ul>
        <p className='indent-3'>
          Once live, Sheep Coin trades at market value based on supply and
          demand.
        </p>
      </section>
      <section className='space-y-4'>
        <h2 className='text-primary text-2xl font-semibold'>
          Using Sheep Coin
        </h2>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='bg-secondary layered-shadow-md flex-1 rounded-lg p-4'>
            <h3 className='text-accent text-xl font-semibold'>
              Minting Wolf NFTs
            </h3>
            <ul className='list-inside list-disc'>
              <li>
                1st Wolf costs 1 Sheep, 2nd costs 2 Sheep, 3rd costs 3 Sheep,
                etc.
              </li>
              <li>All Sheep Coins used are burned permanently.</li>
              <li>
                Minting also requires Sonic Tokens (tentatively 100 wS per
                Wolf).
              </li>
            </ul>
          </div>
          <div className='bg-secondary layered-shadow-md flex-1 rounded-lg p-4'>
            <h3 className='text-accent text-xl font-semibold'>
              Wolf NFT Mechanics
            </h3>
            <ul className='list-inside list-disc'>
              <li>
                Wolves consume Sheep daily (1 Sheep on Day 1, 2 on Day 2, etc.).
              </li>
              <li>A Wolf that doesn't eat for 7 days becomes useless.</li>
              <li>
                If a Wolf eats from the liquidity pool, 100% of the Sheep are
                burned.
              </li>
              <li>
                Wolf can have only 3 subsequent meals from liquidity pool.
              </li>
              <li>
                If a Wolf eats from a wallet (its own or someone else's): 25%
                goes to owner and 75% are burned.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='space-y-4'>
        <h2 className='text-primary text-2xl font-semibold'>
          Protecting Sheep from Wolves
        </h2>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='bg-secondary layered-shadow-md flex-1 rounded-lg p-4'>
            <h3 className='text-accent text-xl font-semibold'>
              Sheep Dog Protection
            </h3>
            <ul className='list-inside list-disc'>
              <li>Sheep can be deposited into the Sheep Dog for protection.</li>
              <li>
                To withdraw, players must activate sleep mode, wait 2 days, and
                pay a fee.
              </li>
            </ul>
          </div>
          <div className='bg-secondary layered-shadow-md flex-1 rounded-lg p-4'>
            <h3 className='text-accent text-xl font-semibold'>
              Sheep Dog Rewards
            </h3>
            <ul className='list-inside list-disc'>
              <li>
                Deposited Sheep earn rewards through Annual Percentage Rate
                (APR).
              </li>
              <li>Rewards come from Sonic Tokens and withdrawal fees.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-primary text-2xl font-bold'>Conclusion</h2>
        <p className='indent-3'>
          Sheep Coin is a strategic blockchain game where players buy, sell,
          mint, and protect assets. Success depends on understanding the
          mechanics and building the right strategy.
        </p>
        <p className='text-accent my-4 text-lg font-semibold'>
          Do you have what it takes to dominate the Sheep Coin ecosystem?
        </p>
      </section>
      <section>
        <h2 className='text-primary text-2xl font-bold'>Contracts</h2>
        <table className='border-separate border-spacing-x-4 border-spacing-y-2'>
          <thead>
            <tr>
              <th className='text-left'>Contract</th>
              <th className='text-left'>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SHEEP</td>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sonicscan.org/address/0x7bf26dF0E9Db4F70f286c39A9cd3A77Cb7407aa4'
                  className='visited:text-accent hover:text-accent truncate transition-colors'
                >
                  0x7bf26dF0E9Db4F70f286c39A9cd3A77Cb7407aa4
                </a>
              </td>
            </tr>
            <tr>
              <td>WOLF</td>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sonicscan.org/address/0xf1152a195B93d51457633F96B81B1CF95a96E7A7'
                  className='visited:text-accent hover:text-accent truncate transition-colors'
                >
                  0xf1152a195B93d51457633F96B81B1CF95a96E7A7
                </a>
              </td>
            </tr>
            <tr>
              <td>SHEEPDOG</td>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sonicscan.org/address/0xa3b5f40a5719208B507F658a11Fb314Ef5e2c0e2'
                  className='visited:text-accent hover:text-accent truncate transition-colors'
                >
                  0xa3b5f40a5719208B507F658a11Fb314Ef5e2c0e2
                </a>
              </td>
            </tr>
            <tr>
              <td>SHADOW_POOL</td>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sonicscan.org/address/0xe0707Bd1e3800067447282eA95cE5B41D7E493d1'
                  className='visited:text-accent hover:text-accent truncate transition-colors'
                >
                  0xe0707Bd1e3800067447282eA95cE5B41D7E493d1
                </a>
              </td>
            </tr>
            <tr>
              <td>EQUALIZER_POOL</td>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sonicscan.org/address/0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590'
                  className='visited:text-accent hover:text-accent truncate transition-colors'
                >
                  0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590
                </a>
              </td>
            </tr>
            <tr>
              <td>WRAPPED_SONIC</td>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sonicscan.org/address/0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38'
                  className='visited:text-accent hover:text-accent truncate transition-colors'
                >
                  0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38
                </a>
              </td>
            </tr>
            <tr>
              <td>COMMUNITY_SHEEP_FARM</td>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sonicscan.org/address/0xb58ae5a57e6Ea807aa69ee4966aA3e946DA3188d'
                  className='visited:text-accent hover:text-accent truncate transition-colors'
                >
                  0xb58ae5a57e6Ea807aa69ee4966aA3e946DA3188d
                </a>
              </td>
            </tr>
            <tr>
              <td>EQUALIZER_EATER</td>
              <td>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://sonicscan.org/address/0xD18015D7B907797057f19370ADc870f4170253C3'
                  className='visited:text-accent hover:text-accent truncate transition-colors'
                >
                  0xD18015D7B907797057f19370ADc870f4170253C3
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Info } from 'lucide-react';
import { useAccount } from 'wagmi';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { toast } from 'sonner';

export function SheepDogTabs() {
  const [activeTab, setActiveTab] = useState('Deposit');
  const [balance, setBalance] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [isValidBalance, setIsValidBalance] = useState(false);

  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  const handleBalanceChange = (value: string) => {
    setBalance(value);
    const isValid = /^(\d*\.?\d+|\d+\.?\d*)$/.test(value) && value !== '';
    setIsValidBalance(isValid);
  };

  const handleDepositButtonClick = () => {
    if (!isConnected) {
      if (openConnectModal) {
        openConnectModal();
      }
    } else if (agreement && isValidBalance) {
      console.log('执行 Protect:', balance);
    }
  };

  const handleWithdrawButtonClick = () => {
    if (!isConnected) {
      if (openConnectModal) {
        openConnectModal();
      }
    } else {
      if (balance === '' || balance === '0') {
        console.log("You have no SHEEP to withdraw.")
        toast.warning("You have no SHEEP to withdraw.", {
          duration: 2000,
        })
      } else {
        console.log('执行 Sleep 逻辑，提取数量:', balance);
      }
    }
  };

  return (
    <div className='flex w-full max-w-96 flex-col gap-5'>
      <div
        role='tablist'
        aria-label='Deposit or Withdraw'
        aria-orientation='horizontal'
        className='flex items-center gap-4'
      >
        <button
          id='tab-Deposit'
          role='tab'
          aria-selected={activeTab === 'Deposit'}
          aria-controls='tabpanel-Deposit'
          tabIndex={activeTab === 'Deposit' ? 0 : -1}
          type='button'
          onClick={() => setActiveTab('Deposit')}
          className={`cursor-pointer font-semibold transition-colors hover:text-accent ${activeTab === 'Deposit' ? 'text-accent' : 'text-foreground/80'
            }`}
        >
          Deposit
        </button>
        <button
          id='tab-Withdraw'
          role='tab'
          aria-selected={activeTab === 'Withdraw'}
          aria-controls='tabpanel-Withdraw'
          tabIndex={activeTab === 'Withdraw' ? 0 : -1}
          type='button'
          onClick={() => setActiveTab('Withdraw')}
          className={`cursor-pointer font-semibold transition-colors hover:text-accent ${activeTab === 'Withdraw' ? 'text-accent' : 'text-foreground/80'
            }`}
        >
          Withdraw
        </button>
      </div>

      <div
        className='bg-card layered-shadow-md rounded-xl'
        style={{ height: activeTab === 'Deposit' ? 399 : 208 }}
      >
        <div>
          {activeTab === 'Deposit' && (
            <div
              role='tabpanel'
              id='tabpanel-Deposit'
              aria-labelledby='tab-Deposit'
              className='p-5'
              style={{ opacity: 1 }}
            >
              <div className='space-y-5'>
                <div className='grid grid-cols-2'>
                  <div className='text-center'>
                    <p>Total staked</p>
                    <p>1,392,142.23 SHEEP</p>
                  </div>
                  <div className='text-center'>
                    <div className='flex items-center justify-center gap-2'>
                      <p>Your stake</p>
                      <button
                        className='inline-flex items-center justify-center'
                        aria-label='Show information'
                        data-state='closed'
                        data-slot='tooltip-trigger'
                      >
                        <Info
                          className='lucide lucide-info h-4 w-4'
                          aria-hidden='true'
                        />
                        <span
                          style={{
                            position: 'absolute',
                            border: 0,
                            width: 1,
                            height: 1,
                            padding: 0,
                            margin: -1,
                            overflow: 'hidden',
                            clip: 'rect(0px, 0px, 0px, 0px)',
                            whiteSpace: 'nowrap',
                            overflowWrap: 'normal',
                          }}
                        >
                          Info
                        </span>
                      </button>
                    </div>
                    <p>0.00 SHEEP</p>
                  </div>
                </div>
                <div>
                  <div className='text-center'>
                    <p>1 SheepDog = 1.27 SHEEP</p>
                  </div>
                </div>
                <div className='space-y-1'>
                  <p className='cursor-pointer text-right text-xs'>
                    Balance: {balance || '0.00'} SHEEP
                  </p>
                  <input
                    data-slot='input'
                    className='border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-full p-4 text-right text-xl'
                    inputMode='decimal'
                    placeholder='0.00'
                    type='text'
                    value={balance}
                    onChange={(e) => handleBalanceChange(e.target.value)}
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <button
                    type='button'
                    role='checkbox'
                    aria-checked={agreement}
                    data-state={agreement ? 'checked' : 'unchecked'}
                    value='on'
                    data-slot='checkbox'
                    onClick={() => setAgreement(!agreement)}
                    className='peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'
                    id='rent agreement'
                  >
                    {agreement && (
                      <span
                        data-state='checked'
                        data-slot='checkbox-indicator'
                        className='flex items-center justify-center text-current transition-none'
                        style={{ pointerEvents: 'none' }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='lucide lucide-check size-3.5'
                        >
                          <path d='M20 6 9 17l-5-5'></path>
                        </svg>
                      </span>
                    )}
                  </button>
                  <label
                    htmlFor='rent agreement'
                    className='text-sm leading-none font-medium'
                  >
                    I agree to pay 10 wS per day sheepdog rent
                  </label>
                </div>
                <button
                  data-slot='button'
                  onClick={handleDepositButtonClick}
                  disabled={isConnected && (!agreement || !isValidBalance)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-accent w-full py-4 font-bold text-white hover:bg-[#77482F] disabled:cursor-not-allowed disabled:bg-[#BFA999]"
                >
                  <span style={{ opacity: 1, transform: 'none' }}>
                    {isConnected ? 'Protect' : 'Connect Wallet'}
                  </span>
                </button>
                <button
                  data-slot='tooltip-trigger'
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-muted text-muted-foreground hover:bg-[hsl(40,15%,95%)] px-4 py-2 font-semibold w-full"
                  disabled
                  data-state='closed'
                >
                  <span style={{ opacity: 1, transform: 'none' }}>
                    Trigger Buyback
                  </span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'Withdraw' && (
            <div
              role='tabpanel'
              id='tabpanel-Withdraw'
              aria-labelledby='tab-Withdraw'
              className='p-5'
              style={{ opacity: 1 }}
            >
              <div className='space-y-5'>
                <div className='grid grid-cols-2'>
                  <div className='text-center'>
                    <p>Available at</p>
                    <p>-</p>
                  </div>
                  <div className='text-center'>
                    <p>Rent</p>
                    <p>0.00wS</p>
                  </div>
                </div>
                <div className='space-y-1'>
                  <p>No deposits. Nothing to withdraw.</p>
                </div>
                <button
                  data-slot='button'
                  onClick={handleWithdrawButtonClick}
                  disabled={!isConnected}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-accent w-full py-4 font-bold text-white hover:bg-[#77482F] disabled:cursor-not-allowed disabled:bg-[#BFA999]"
                >
                  <span style={{ opacity: 1, transform: 'none' }}>
                    {isConnected ? 'Sleep' : 'Connect Wallet'}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

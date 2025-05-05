"use client";

import { useState } from 'react';

export function WolfCard() {
    const [isAgreed, setIsAgreed] = useState(false);

    return (
        <div className='bg-card layered-shadow-md w-full max-w-96 space-y-5 rounded-xl p-5'>
            <div className='grid grid-cols-2'>
                <div className='text-center'>
                    <p>You have</p>
                    <p>0 Wolfs</p>
                </div>
                <div className='text-center'>
                    <p>Price</p>
                    <p>771 SHEEP + 100WS</p>
                </div>
            </div>
            <div className='pointer-events-none my-10 flex items-center justify-center select-none'>
                <img
                    alt='Pixel art sandwich on a beach'
                    className='aspect-square h-64 w-64 object-cover'
                    src='/angry-wolf-face.png'
                />
            </div>
            <div className='flex items-center gap-2'>
                <button
                    type='button'
                    role='checkbox'
                    aria-checked={isAgreed}
                    data-state={isAgreed ? 'checked' : 'unchecked'}
                    value='on'
                    data-slot='checkbox'
                    onClick={() => setIsAgreed(!isAgreed)}
                    className='peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50'
                    id='price agreement'
                >
                    {isAgreed && (
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
                    htmlFor='price agreement'
                    className='text-sm leading-none font-medium cursor-pointer'
                >
                    You may end up paying more SHEEP than shown, depending on current
                    order
                </label>
            </div>
            <button
                data-slot='button'
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-accent w-full py-4 font-bold text-white hover:bg-[#77482F] disabled:cursor-not-allowed disabled:bg-[#BFA999]"
                disabled={!isAgreed}
            >
                <span style={{ opacity: 1, transform: 'none' }}>Approve</span>
            </button>
            <button
                data-slot='button'
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-muted text-muted-foreground hover:bg-[hsl(40,15%,95%)] px-4 py-2 font-semibold w-full"
                disabled
            >
                <span style={{ opacity: 1, transform: 'none' }}>Wrap 100S</span>
            </button>
        </div>
    );
}

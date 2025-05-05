import Image from 'next/image';

export default function WolfNFTCheckPage() {
    return (<div className="mb-4 space-y-8 px-4">
        <h1 className="font-bubbles text-4xl">Wolf Check</h1>
        <div className="mb-8 flex flex-col justify-between lg:flex-row">
            <p className="max-w-[560px] text-lg">Carefully investigate the wolf's behavior and determine if it is an alive wolf
                with proper appetite.</p>
            <div className="flex justify-center"><Image alt="Wolf image" className="aspect-square h-64 w-64 object-cover"
                src="/angry-wolf-face.png" width={256} height={256} /></div>
        </div>
        <section className="space-y-5">
            <h2 className="text-2xl font-semibold">Check Wolf</h2>
            <div className="relative flex flex-col items-center justify-center">
                <div className="bg-card layered-shadow-md w-full max-w-96 space-y-5 rounded-xl p-5">
                    <div className="mt-auto space-y-2">
                        <p className="text-sm">Wolf ID</p><input data-slot="input"
                            className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive p-4"
                            inputMode="decimal" placeholder="0x..." type="text" defaultValue="" />
                    </div>
                    <div className="grid grid-cols-2 gap-y-2">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2">
                                <p>Hunger</p><button className="inline-flex items-center justify-center"
                                    aria-label="Show information" data-state="closed" data-slot="tooltip-trigger"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-info h-4 w-4" aria-hidden="true"
                                        focusable="false">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4"></path>
                                        <path d="M12 8h.01"></path>
                                    </svg><span
                                        style={{ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" }}>Info</span></button>
                            </div>
                            <p>0.00</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2">
                                <p>Eaten from LP</p><button className="inline-flex items-center justify-center"
                                    aria-label="Show information" data-state="closed" data-slot="tooltip-trigger"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-info h-4 w-4" aria-hidden="true"
                                        focusable="false">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4"></path>
                                        <path d="M12 8h.01"></path>
                                    </svg><span
                                        style={{ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" }}>Info</span></button>
                            </div>
                            <p>0.00</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2">
                                <p>Hungry</p><button className="inline-flex items-center justify-center"
                                    aria-label="Show information" data-state="closed" data-slot="tooltip-trigger"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-info h-4 w-4" aria-hidden="true"
                                        focusable="false">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4"></path>
                                        <path d="M12 8h.01"></path>
                                    </svg><span
                                        style={{ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" }}>Info</span></button>
                            </div>
                            <p>-</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2">
                                <p>Starves</p><button className="inline-flex items-center justify-center"
                                    aria-label="Show information" data-state="closed" data-slot="tooltip-trigger"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide lucide-info h-4 w-4" aria-hidden="true"
                                        focusable="false">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M12 16v-4"></path>
                                        <path d="M12 8h.01"></path>
                                    </svg><span
                                        style={{ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal" }}>Info</span></button>
                            </div>
                            <p>-</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
} 
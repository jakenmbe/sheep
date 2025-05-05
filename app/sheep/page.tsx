"use client"

import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"

export default function SheepPage() {
  const [selectedCurrency, setSelectedCurrency] = useState("S")
  const [balance, setBalance] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [isValidBalance, setIsValidBalance] = useState(false)

  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currencies = ["S", "Ws", "SHEEP"]

  // 处理点击页面其他区域关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    // 添加全局点击事件监听器
    document.addEventListener("mousedown", handleClickOutside)

    // 清理函数
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency)
    setShowDropdown(false)
  }

  const handleBalanceChange = (value: string) => {
    setBalance(value)
    // 验证输入是否为有效的浮点数
    const isValid = /^(\d*\.?\d+|\d+\.?\d*)$/.test(value) && value !== ""
    setIsValidBalance(isValid)
  }

  // 处理按钮点击
  const handleButtonClick = () => {
    if (!isConnected) {
      // 如果钱包未连接，打开连接钱包模态框
      if (openConnectModal) {
        openConnectModal()
      }
    } else if (isValidBalance) {
      // 如果钱包已连接并且输入有效，执行交换操作
      console.log("执行交换:", balance, selectedCurrency)
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto w-full px-4 flex-1 flex flex-col">
      <div className="mb-4 space-y-6 px-4">
        <h1 className="font-bubbles text-4xl">SHEEP</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Buy sheep</h2>
          <p className="max-w-[560px] text-lg">The pre-mint has ended. You can now buy SHEEP from the secondary market.</p>

          <div className="relative flex flex-col items-center justify-center">
            <div className="bg-card layered-shadow-md w-full max-w-96 space-y-5 rounded-xl p-5">
              <div className="grid grid-cols-1">
                <div className="text-center">
                  <p>Your balance</p>
                  <p>0.00 SHEEP</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="cursor-pointer text-right text-xs">Balance: <span>{balance || "0.00"}</span> <span>{selectedCurrency}</span></p>
                    <div className="relative">
                      <div ref={dropdownRef}>
                        <button
                          type="button"
                          role="combobox"
                          aria-expanded={showDropdown}
                          data-state={showDropdown ? "open" : "closed"}
                          data-slot="select-trigger"
                          className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;>span]:line-clamp-1 absolute top-1/2 left-4 w-24 -translate-y-[50%]"
                          onClick={() => setShowDropdown(!showDropdown)}
                        >
                          <span data-slot="select-value">{selectedCurrency}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down size-4 opacity-50"
                            aria-hidden="true"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>

                        {showDropdown && (
                          <div className="absolute left-4 top-11 w-24 rounded-md border border-input bg-card shadow-md z-20">
                            {currencies.map((currency) => (
                              <div
                                key={currency}
                                className="px-3 py-2 text-sm cursor-pointer hover:bg-muted"
                                onClick={() => handleCurrencySelect(currency)}
                              >
                                {currency}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <input
                        className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-full p-4 text-right text-xl"
                        inputMode="decimal"
                        placeholder="0.00"
                        type="text"
                        value={balance}
                        onChange={(e) => handleBalanceChange(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      type="button"
                      role="combobox"
                      aria-expanded="false"
                      data-state="closed"
                      data-slot="select-trigger"
                      className="border-input flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 absolute top-1/2 left-4 w-24 -translate-y-[50%]"
                    >
                      SHEEP
                      <ChevronDown className="size-4 opacity-50" />
                    </button>
                    <input
                      data-slot="input"
                      className="border-input flex w-full min-w-0 rounded-md border bg-transparent shadow-xs h-full p-4 text-right text-xl"
                      readOnly
                      inputMode="decimal"
                      type="text"
                      value="0"
                    />
                  </div>
                </div>

                <p className="text-right text-xs">
                  Powered by <a aria-label="Magpie Aggregator" target="_blank" rel="noreferrer noopener" href="https://app.magpiefi.xyz/swap/sonic/S/sonic/SHEEP" className="text-purple-500">Magpie</a>
                </p>
              </div>

              <button
                data-slot="button"
                onClick={handleButtonClick}
                disabled={isConnected && !isValidBalance}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-accent w-full py-4 font-bold text-white hover:bg-[#77482F] disabled:cursor-not-allowed disabled:bg-[#BFA999]">
                <span style={{ opacity: 1, transform: "none" }}>{isConnected ? "Swap" : "Connect Wallet"}</span>
              </button>

              <div className="space-y-2"><a aria-label="Buy on Shadow Exchange" target="_blank" rel="noreferrer noopener" href="https://www.shadow.so/trade?inputCurrency=0x0000000000000000000000000000000000000000&outputCurrency=0x7bf26dF0E9Db4F70f286c39A9cd3A77Cb7407aa4" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 bg-muted text-muted-foreground hover:bg-[hsl(40,15%,95%)] px-4 py-2 font-semibold w-full">Buy on Shadow</a>
                <a aria-label="Buy on Equalizer" target="_blank" rel="norefferer noopener"
                  href="https://equalizer.exchange/swap?fromToken=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amp;toToken=0x7bf26dF0E9Db4F70f286c39A9cd3A77Cb7407aa4"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-muted text-muted-foreground hover:bg-[hsl(40,15%,95%)] px-4 py-2 font-semibold w-full">
                  Buy on Equalizer
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

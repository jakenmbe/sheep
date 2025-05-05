"use client"
import { useState, useEffect } from "react"

export default function ActivityPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // 固定的表格数据，确保服务器和客户端渲染结果一致
  const victimData = [
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "24.00", time: "a minute ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "24.00", time: "2 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "39.00", time: "5 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "36.00", time: "6 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "39.00", time: "7 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "39.00", time: "8 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "37.00", time: "9 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "37.00", time: "9 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "40.00", time: "10 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "35.00", time: "18 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "33.00", time: "19 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "38.00", time: "22 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "38.00", time: "22 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "34.00", time: "43 minutes ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "33.00", time: "an hour ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "33.00", time: "an hour ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "33.00", time: "an hour ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "36.00", time: "3 hours ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "40.00", time: "3 hours ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "40.00", time: "3 hours ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "40.00", time: "3 hours ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "32.00", time: "3 hours ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "37.00", time: "3 hours ago" },
    { address: "0xdc567cD1D4A642f09Ba62B33D1Fd731a46c34590", amount: "37.00", time: "3 hours ago" }
  ]

  return (
    <div className="mb-4 space-y-8 px-4">
      <h1 className="font-bubbles text-4xl">Activity</h1>
      <p className="max-w-[560px] text-lg">Latest sheep victims of the wolves.</p>
      <div className="bg-card layered-shadow-md mx-auto w-full space-y-6 rounded-xl p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div>
              <p className="text-muted-foreground text-sm">24 hours eaten</p>
              <p className="text-lg font-medium">17,669.00 SHEEP</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">24 hours minted</p>
              <p className="text-lg font-medium">0 Wolves</p>
            </div>
          </div>
          <div className="text-right">
            <div>
              <p className="text-muted-foreground text-sm">Total burned</p>
              <p className="text-lg font-medium">573,900.50 SHEEP</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Total hunger</p>
              <p className="text-lg font-medium">22244 SHEEP</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-sm">Alive wolves</p>
              <p className="text-lg font-medium">676 Wolves</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-sm">Dead wolves</p>
              <p className="text-lg font-medium">94 Wolves</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-medium">Latest 25 victims</p>
          </div>
          <div
            dir="ltr"
            data-slot="scroll-area"
            className="border-card-foreground relative h-96 rounded-md border"
            style={{ position: "relative", "--radix-scroll-area-corner-width": "0px", "--radix-scroll-area-corner-height": "0px" } as React.CSSProperties}
          >
            <style jsx>{`
              [data-radix-scroll-area-viewport] {
                scrollbar-width: none;
                -ms-overflow-style: none;
                -webkit-overflow-scrolling: touch;
              }

              [data-radix-scroll-area-viewport]::-webkit-scrollbar {
                display: none
              }
            `}</style>
            <div
              data-radix-scroll-area-viewport=""
              data-slot="scroll-area-viewport"
              className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
              style={{ overflow: "hidden scroll" }}
            >
              <div style={{ minWidth: "100%", display: "table" }}>
                <table className="w-full text-sm">
                  <thead className="sticky top-0">
                    <tr className="bg-muted">
                      <th className="p-2 text-left font-medium select-none">
                        <div className="flex items-center gap-1">Victim</div>
                      </th>
                      <th className="p-2 text-left font-medium select-none">
                        <div className="flex items-center gap-1">Eaten</div>
                      </th>
                      <th className="p-2 text-left font-medium select-none">
                        <div className="flex items-center gap-1">Time</div>
                      </th>
                    </tr>
                    <tr>
                      <th className="bg-card-foreground h-[1px]" colSpan={4}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {victimData.map((victim, i) => (
                      <tr key={i} className="hover:bg-muted/50 border-card-foreground border-b last:border-b-0">
                        <td className="p-2">
                          <div
                            className="max-w-16 truncate sm:max-w-[150px]"
                            title={victim.address}
                          >
                            {victim.address}
                          </div>
                        </td>
                        <td className="p-2">{victim.amount}</td>
                        <td className="p-2">{victim.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

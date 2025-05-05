"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { WalletButton } from "./wallet-button"

export function Header() {
  const [activeTab, setActiveTab] = useState("home")
  const [moreOpen, setMoreOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 处理点击外部区域关闭dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="mx-auto mb-10 w-full max-w-screen-xl px-4 pt-4">
      <div className="layered-shadow bg-wool flex h-20 w-full items-center justify-between rounded-xl px-8">
        <div className="flex items-center space-x-16">
          <Link href="/" className="h-12 w-12" onClick={() => setActiveTab("home")}>
            <Image
              src="/sheep-face.png"
              alt="Logo"
              width={48}
              height={48}
              className="aspect-square object-cover"
            />
          </Link>

          <nav aria-label="主导航" className="relative">
            <div className="hidden items-center gap-8 text-xl lg:flex">
              <NavItem href="/sheep" active={activeTab === "sheep"} onClick={() => setActiveTab("sheep")}>
                Sheep
              </NavItem>

              <NavItem href="/wolf" active={activeTab === "wolf-nft"} onClick={() => setActiveTab("wolf-nft")}>
                Wolf NFT
              </NavItem>

              <NavItem href="/sheepdog" active={activeTab === "sheepdog"} onClick={() => setActiveTab("sheepdog")}>
                SheepDog
              </NavItem>

              <div className="relative" ref={dropdownRef}>
                <NavItem
                  href="#"
                  active={activeTab === "more"}
                  onClick={() => {
                    setActiveTab("more")
                    setMoreOpen(!moreOpen)
                  }}
                >
                  More
                </NavItem>

                {moreOpen && (
                  <div
                    data-side="bottom"
                    data-align="center"
                    data-state="open"
                    role="dialog"
                    data-slot="popover-content"
                    className="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 rounded-md border p-4 shadow-md outline-hidden flex w-32 flex-col gap-1 absolute top-full left-0 mt-1 bg-white"
                  >
                    <Link
                      href="/docs"
                      className="inline-flex items-center px-3 py-2 font-semibold"
                      onClick={() => {
                        setActiveTab("docs")
                        setMoreOpen(false)
                      }}
                    >
                      Docs
                    </Link>
                    <Link
                      href="/activity"
                      className="inline-flex items-center px-3 py-2 font-semibold"
                      onClick={() => {
                        setActiveTab("activity")
                        setMoreOpen(false)
                      }}
                    >
                      Activity
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <nav
            aria-label="移动导航"
            className="bg-wool fixed right-0 bottom-0 left-0 z-10 flex items-center justify-between gap-4 border-t px-5 py-2 text-xl lg:hidden"
          >
            <Link className="inline-flex w-full items-center justify-center" href="/sheep">
              Sheep
            </Link>
            <Link className="inline-flex w-full items-center justify-center" href="/wolf-nft">
              Wolf
            </Link>
            <Link className="inline-flex w-full items-center justify-center" href="/sheepdog">
              SheepDog
            </Link>
            <button
              className="inline-flex w-full items-center justify-center"
              aria-label="More"
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More
            </button>
          </nav>
        </div>

        <div>
          <WalletButton />
        </div>
      </div>
    </header>
  )
}

interface NavItemProps {
  href: string
  active?: boolean
  onClick?: () => void
  children: React.ReactNode
}

function NavItem({ href, active, onClick, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-3 py-2 font-semibold",
        active
          ? "bg-[#e2dece] rounded-lg text-[#4D4A45]"
          : "hover:text-[#4D4A45] hover:bg-[#e2dece]/50 hover:rounded-lg transition-all"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
} 
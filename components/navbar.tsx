"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { WalletButton } from "@/components/wallet-button"

export function Navbar() {
  const [activeTab, setActiveTab] = useState("home")
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="mx-auto mb-10 w-full max-w-screen-xl px-4 pt-4">
      <div className="layered-shadow bg-wool flex h-20 w-full items-center justify-between rounded-xl px-8 py-2">
        <div className="flex items-center justify-between gap-16">
          <Link href="/" className="h-16 w-16">
            <Image
              src="/sheep-face.png"
              alt="Logo"
              width={64}
              height={64}
              className="aspect-square object-cover"
            />
          </Link>

          <nav aria-label="Main navigation" className="relative">
            <div className="hidden items-center gap-8 text-xl lg:flex">
              <NavItem href="/sheep" active={activeTab === "sheep"} onClick={() => setActiveTab("sheep")}>
                Sheep
              </NavItem>

              <NavItem href="/wolf-nft" active={activeTab === "wolf-nft"} onClick={() => setActiveTab("wolf-nft")}>
                Wolf NFT
              </NavItem>

              <NavItem href="/sheepdog" active={activeTab === "sheepdog"} onClick={() => setActiveTab("sheepdog")}>
                SheepDog
              </NavItem>

              <div className="relative">
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
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg z-10 w-32">
                    <Link
                      href="/docs"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => {
                        setActiveTab("docs")
                        setMoreOpen(false)
                      }}
                    >
                      Docs
                    </Link>
                    <Link
                      href="/activity"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
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

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-[#E2DECE]"
              style={{
                transition: "clip-path 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                clipPath: "inset(0px 100% 0px 0px round 8px)"
              }}
            >
              <div className="flex items-center gap-8 text-xl">
                <div className="inline-flex items-center justify-center px-3 py-2 font-semibold text-[#4D4A45]">
                  Sheep
                </div>
                <div className="inline-flex items-center justify-center px-3 py-2 font-semibold text-[#4D4A45]">
                  Wolf NFT
                </div>
                <div className="inline-flex items-center justify-center px-3 py-2 font-semibold text-[#4D4A45]">
                  SheepDog
                </div>
                <div className="inline-flex items-center justify-center px-3 py-2 font-semibold text-[#4D4A45]">
                  More
                </div>
              </div>
            </div>
          </nav>

          <nav
            aria-label="Mobile navigation"
            className="bg-sheep fixed right-0 bottom-0 left-0 z-10 flex items-center justify-between gap-4 border-t px-5 py-2 text-xl lg:hidden"
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

        <WalletButton />
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
      className={cn("inline-flex items-center justify-center px-3 py-2 font-semibold",
        active ? "text-[#4D4A45] bg-[#E2DECE]/50" : "")}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

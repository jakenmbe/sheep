import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Rubik_Bubbles } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WalletProvider } from "@/lib/wallet-provider"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })
const rubikBubbles = Rubik_Bubbles({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-bubbles",
})

export const metadata: Metadata = {
  title: "Sheep Coin Game",
  description: "A blockchain-based game economy",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rubikBubbles.variable}`}>
        <WalletProvider>
          <div className="relative flex min-h-dvh flex-col overflow-x-clip">
            <Header />

            <main className="mx-auto flex w-full max-w-screen-xl flex-grow flex-col px-4">
              {children}
              <Toaster richColors position="top-center" />
            </main>

            <Footer />
          </div>
        </WalletProvider>
      </body>
    </html>
  )
}

"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { RainbowKitProvider, darkTheme, lightTheme, DisclaimerComponent } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/lib/wallet-config";

import "@rainbow-me/rainbowkit/styles.css";

// 创建查询客户端
const queryClient = new QueryClient();

// 钱包上下文
type WalletContextType = {
    // 可以添加自定义的钱包相关状态或方法
};

const WalletContext = createContext<WalletContextType>({});

export const useWallet = () => useContext(WalletContext);

// 自定义钱包连接提示内容
const WalletInfoDisclaimer: DisclaimerComponent = ({ Text, Link }) => (
    <Text>
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-bold mb-2">A Home for your Digital Assets</h3>
                <p>Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">A New Way to Log In</h3>
                <p>Instead of creating new accounts and passwords on every website, just connect your wallet.</p>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <div style={{ backgroundColor: '#9c7a5b', borderRadius: '6px', padding: '8px 16px', textAlign: 'center', marginBottom: '8px' }}>
                    <Link href="https://example.com/get-wallet">
                        <span style={{ color: 'white', fontWeight: 'bold' }}>Get a Wallet</span>
                    </Link>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Link href="https://example.com/learn-more">
                        <span style={{ color: '#9c7a5b' }}>Learn More</span>
                    </Link>
                </div>
            </div>
        </div>
    </Text>
);

export function WalletProvider({ children }: { children: ReactNode }) {
    // 可以在这里添加额外的钱包状态逻辑
    // 确保每次只获取一次配置，避免重复初始化
    const wagmiConfig = useMemo(() => config(), []);

    const walletContextValue: WalletContextType = {
        // 自定义的钱包相关状态或方法
    };

    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    theme={lightTheme({
                        accentColor: '#9c7a5b', // 使用网站的强调色
                        accentColorForeground: 'white',
                        borderRadius: 'medium',
                        fontStack: 'system',
                    })}
                    modalSize="wide"
                    appInfo={{
                        appName: "Sheep App",
                        learnMoreUrl: "https://example.com/learn-more",
                        disclaimer: WalletInfoDisclaimer
                    }}
                    coolMode
                >
                    <WalletContext.Provider value={walletContextValue}>
                        {children}
                    </WalletContext.Provider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
} 
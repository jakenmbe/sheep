import { http, createConfig, Config } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  coinbaseWallet,
  rabbyWallet,
  walletConnectWallet,
  injectedWallet
} from '@rainbow-me/rainbowkit/wallets';

// 动态获取当前URL
const getOrigin = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return 'https://sheep.app';
};

// 防止重复初始化WalletConnect
// 通过创建一个延迟导出的配置，确保WalletConnect只被初始化一次
let config: Config | undefined;

// 延迟创建配置，确保只在需要时初始化
export const getConfig = (): Config => {
  if (!config) {
    // 尝试修复CORS问题的配置
    if (typeof localStorage !== 'undefined') {
      try {
        // 临时禁用WalletConnect严格模式，允许更宽松的连接
        localStorage.setItem('WALLETCONNECT_STRICT_MODE', 'false');
      } catch (e) {
        console.warn('无法设置localStorage', e);
      }
    }
    
    config = getDefaultConfig({
      appName: "Sheep App",
      // 使用一个临时的演示项目ID (来自WalletConnect示例)
      projectId: "c0a566d47ae6787e4baddc98d8adf4f7",
      chains: [mainnet, sepolia],
      transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
      },
      ssr: true, // 启用SSR支持
      
      // 自定义钱包列表
      wallets: [
        {
          groupName: "Installed",
          wallets: [
            metaMaskWallet
          ]
        },
        {
          groupName: "Recommended",
          wallets: [
            coinbaseWallet,
            injectedWallet,
            rabbyWallet,
            walletConnectWallet
          ]
        }
      ]
    });
  }
  
  return config;
};

// 为了兼容导出
export { getConfig as config }; 
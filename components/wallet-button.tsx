"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { cn } from "@/lib/utils";

// 将按钮样式提取为独立组件
function DisconnectedButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="flex items-center rounded-md shadow-md text-white font-bold transition ease duration-125 hover:scale-[1.025] active:scale-[0.95] relative bg-accent px-6 py-2"
        >
            Connect Wallet
        </button>
    );
}

function WrongNetworkButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="flex items-center rounded-md shadow-md text-white font-bold transition ease duration-125 hover:scale-[1.025] active:scale-[0.95] relative bg-red-500 px-6 py-2"
        >
            Wrong Network
        </button>
    );
}

function ConnectedButton({
    onClick,
    displayName
}: {
    onClick: () => void;
    displayName?: string;
}) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="flex items-center rounded-xl shadow-md transition ease duration-125 hover:scale-[1.025] active:scale-[0.95] bg-white border border-gray-200 py-1 px-2"
            data-testid="rk-account-button"
        >
            <div className="mr-2 text-black font-medium">
                0 S
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 py-1 px-2 rounded-lg">
                <div className="relative rounded-full overflow-hidden" style={{ height: "24px", width: "24px" }}>
                    <div
                        className="flex items-center justify-center rounded-full"
                        style={{
                            backgroundColor: "rgb(252, 92, 84)",
                            height: "24px",
                            width: "24px"
                        }}
                    >
                        🎈
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-1 font-medium">{displayName}</div>
                    <svg fill="none" height="7" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.75 1.54001L8.51647 5.0038C7.77974 5.60658 6.72026 5.60658 5.98352 5.0038L1.75 1.54001"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                        ></path>
                    </svg>
                </div>
            </div>
        </button>
    );
}

// 主组件
export function WalletButton() {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus || authenticationStatus === "authenticated");

                let buttonContent;
                if (!connected) {
                    buttonContent = <DisconnectedButton onClick={openConnectModal} />;
                } else if (chain.unsupported) {
                    buttonContent = <WrongNetworkButton onClick={openChainModal} />;
                } else {
                    buttonContent = <ConnectedButton
                        onClick={openAccountModal}
                        displayName={account?.displayName}
                    />;
                }

                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                    >
                        {buttonContent}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
} 
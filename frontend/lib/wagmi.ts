// lib/wagmi.ts
import { createConfig, http } from "wagmi";
import { mainnet, sepolia, polygon, polygonAmoy } from "wagmi/chains";
import { metaMask, injected, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "demo";

export const wagmiConfig = createConfig({
  chains: [sepolia, polygon, polygonAmoy, mainnet],
  connectors: [
    metaMask(),
    injected(),
    walletConnect({ projectId }),
  ],
  transports: {
    [mainnet.id]: http(process.env.NEXT_PUBLIC_MAINNET_RPC || undefined),
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC || undefined),
    [polygon.id]: http(process.env.NEXT_PUBLIC_POLYGON_RPC || undefined),
    [polygonAmoy.id]: http(),
  },
});

// Chain names for display
export const CHAIN_NAMES: Record<number, string> = {
  1:     "Ethereum Mainnet",
  11155111: "Sepolia Testnet",
  137:   "Polygon Mainnet",
  80002: "Polygon Amoy",
};

export const SUPPORTED_CHAINS = [sepolia, polygon, polygonAmoy];

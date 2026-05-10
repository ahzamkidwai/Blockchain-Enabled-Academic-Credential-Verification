// lib/wagmi.ts
import { createConfig, http } from "wagmi";
import { defineChain } from 'viem';
import { mainnet, sepolia, polygon, polygonAmoy } from "wagmi/chains";
import { metaMask, injected, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID");
}

export const anvil = defineChain({
  id: 31337,
  name: "Anvil Local",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
    },
  },
});

export const wagmiConfig = createConfig({
  chains: [anvil, sepolia, polygon, polygonAmoy, mainnet],
  connectors: [
    metaMask(),
    injected(),
    walletConnect({ projectId }),
  ],
  transports: {
    [anvil.id]: http("http://127.0.0.1:8545"),
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC || undefined),
    [polygon.id]: http(process.env.NEXT_PUBLIC_POLYGON_RPC || undefined),
    [polygonAmoy.id]: http(),
    [mainnet.id]: http(process.env.NEXT_PUBLIC_MAINNET_RPC || undefined),
  },
});

// Chain names for display
export const CHAIN_NAMES: Record<number, string> = {
  1:     "Ethereum Mainnet",
  11155111: "Sepolia Testnet",
  137:   "Polygon Mainnet",
  80002: "Polygon Amoy",
  31337: "Anvil Local",
};

export const SUPPORTED_CHAINS = [anvil,sepolia, polygon, polygonAmoy];

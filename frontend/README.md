# AcadChain — Blockchain Academic Credential Platform

A decentralized academic credential verification system using **soulbound (non-transferable) NFTs** and **IPFS** storage. Built with Next.js 14 App Router, TypeScript, wagmi/viem, ethers.js, and Tailwind CSS.

---

## Architecture Overview

```
┌──────────────────────────────────────────────────────┐
│                  Next.js 14 Frontend                  │
│                                                       │
│  app/              ← App Router pages                 │
│  ├── page.tsx      ← Landing / Hero                   │
│  ├── issue/        ← Issue credential (issuer only)   │
│  ├── verify/       ← Public verification by hash      │
│  ├── dashboard/    ← Student credential dashboard     │
│  └── credential/   ← Individual credential detail     │
│                                                       │
│  components/       ← Reusable UI components           │
│  ├── ui/           ← Primitive components             │
│  ├── WalletConnect ← MetaMask / wallet connection     │
│  ├── CredentialCard← Credential display widget        │
│  ├── ConnectGate   ← Wallet-required page guard       │
│  ├── Navbar        ← Navigation + theme toggle        │
│  └── StatsBar      ← Platform statistics              │
│                                                       │
│  hooks/            ← wagmi contract hooks             │
│  lib/              ← Types, utils, config             │
│  styles/           ← CSS variables / design tokens    │
└──────────────┬───────────────────────────────────────┘
               │  wagmi / viem / ethers.js
               ▼
┌──────────────────────────┐    ┌──────────────────────┐
│  AcademicCredential.sol  │    │   IPFS (off-chain)   │
│  Ethereum / Polygon      │    │   Encrypted docs     │
│                          │    │   Pinata / web3.storage│
│  • issueCredential()     │    └──────────────────────┘
│  • verifyByHash()        │
│  • revokeCredential()    │
│  • getStudentCreds()     │
│  • AccessControl roles   │
└──────────────────────────┘
```

---

## Features

| Feature | Description |
|---|---|
| 🔐 Wallet Connect | MetaMask + WalletConnect via wagmi |
| 📜 Issue Credentials | Authorized institutions mint soulbound NFTs |
| ✅ Verify by Hash | Public on-chain verification in seconds |
| 🎓 Student Dashboard | View all credentials, filter by status |
| 🔍 Credential Detail | Full on-chain data + IPFS document link |
| ❌ Revocation | Institutions can revoke/suspend credentials |
| 🌙 Dark Mode | System-aware + manual toggle |
| 🎨 Design Tokens | All colors in `styles/tokens.css` |

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
# Fill in NEXT_PUBLIC_CONTRACT_ADDRESS after deploying the contract
```

### 3. Deploy Smart Contract

Using [Hardhat](https://hardhat.org/) or [Foundry](https://book.getfoundry.sh/):

```bash
# Hardhat example
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

After deployment:
1. Copy the contract address to `NEXT_PUBLIC_CONTRACT_ADDRESS` in `.env.local`
2. Call `registerInstitution()` from the admin wallet to authorize issuers

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Smart Contract: AcademicCredential.sol

### Key Functions

| Function | Access | Description |
|---|---|---|
| `issueCredential(student, ipfsCID, hash, type, expires)` | ISSUER_ROLE | Mint soulbound credential |
| `verifyCredentialByHash(hash)` | Public | Returns validity + full credential |
| `getCredential(tokenId)` | Public | Fetch credential by token ID |
| `getStudentCredentials(address)` | Public | All token IDs for a student |
| `revokeCredential(tokenId, reason)` | ISSUER / ADMIN | Permanently revoke |
| `suspendCredential(tokenId, reason)` | ISSUER / ADMIN | Temporarily suspend |
| `reinstateCredential(tokenId)` | ISSUER / ADMIN | Reinstate suspended |
| `registerInstitution(address, name, country)` | ADMIN_ROLE | Authorize an issuer |

### Credential Statuses

```
0 = Active    → Valid, usable credential
1 = Revoked   → Permanently invalidated (fraud, error)
2 = Suspended → Temporarily invalidated (investigation)
```

### Soulbound Design

Credentials are non-transferable by design — no `transfer` or `approve` functions exist. The `student` field is permanently set at issuance and cannot be changed.

---

## Theming

All colors are defined as CSS custom properties in `styles/tokens.css`. To retheme:

1. Edit `styles/tokens.css` — both `:root` (light) and `.dark` sections
2. Tailwind picks up the CSS variables automatically via `tailwind.config.ts`
3. No other files need to change

Key token groups:
- `--brand-{50-900}` — brand color palette
- `--primary`, `--accent`, `--success`, `--warning`, `--destructive` — semantic colors
- `--background`, `--foreground`, `--card`, `--border` — surface colors
- `--shadow-{sm|md|lg|xl}`, `--shadow-glow` — shadow tokens

---

## IPFS Integration

Upload encrypted credential documents to IPFS before issuing:

```typescript
// Example using web3.storage or Pinata
const cid = await uploadToIPFS(encryptedCredentialData);
// Then pass cid to issueCredential()
```

The `ipfsCID` field stores the content identifier. The frontend renders it as:
```
https://ipfs.io/ipfs/{cid}
```

---

## Project Structure

```
credential-platform/
├── app/                  ← Next.js App Router
│   ├── layout.tsx        ← Root layout + metadata
│   ├── providers.tsx     ← wagmi + ReactQuery + ThemeProvider
│   ├── page.tsx          ← Landing page
│   ├── issue/page.tsx    ← Issue form
│   ├── verify/page.tsx   ← Verification tool
│   ├── dashboard/page.tsx← Student dashboard
│   └── credential/[id]/  ← Detail page
├── components/
│   ├── ui/index.tsx      ← Button, Card, Input, Badge, etc.
│   ├── WalletConnect.tsx
│   ├── CredentialCard.tsx
│   ├── ConnectWalletGate.tsx
│   ├── Navbar.tsx
│   └── StatsBar.tsx
├── hooks/
│   ├── useCredential.ts
│   ├── useStudentCredentials.ts
│   ├── useVerifyCredential.ts
│   ├── useIssueCredential.ts
│   ├── useRevokeCredential.ts
│   └── useContractStats.ts
├── lib/
│   ├── contract.ts       ← ABI + address + constants
│   ├── wagmi.ts          ← wagmi config + chains
│   ├── utils.ts          ← Formatters + helpers
│   └── types.ts          ← TypeScript interfaces
├── styles/
│   └── tokens.css        ← ALL design tokens / CSS variables
├── contracts/
│   └── AcademicCredential.sol
└── .env.example
```

---

## Supported Networks

| Network | Chain ID | Usage |
|---|---|---|
| Sepolia Testnet | 11155111 | Development / testing |
| Polygon Mainnet | 137 | Production (low fees) |
| Polygon Amoy | 80002 | Polygon testnet |
| Ethereum Mainnet | 1 | Production (high security) |

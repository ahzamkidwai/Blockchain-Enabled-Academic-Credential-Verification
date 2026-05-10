# FakeAcademicCertificateDApp

A decentralized application (DApp) for issuing and verifying academic credentials. This platform leverages **Soulbound (non-transferable) NFTs** and **IPFS** to ensure academic certificates are tamper-proof, verifiable, and secure. 

The project is split into two main parts:
- **Frontend**: A modern web application built with Next.js 14, Tailwind CSS, Wagmi, and Viem.
- **Smart Contracts**: Solidity smart contracts developed and tested using the Foundry framework.

---

## 🚀 Features

- **Wallet Connection**: Secure authentication via MetaMask or other Web3 wallets using WalletConnect & Wagmi.
- **Issue Credentials**: Authorized academic institutions can issue soulbound NFTs representing academic certificates.
- **Public Verification**: Anyone can instantly verify a certificate's authenticity on-chain using its unique hash.
- **Student Dashboard**: Students can connect their wallets to view all their issued academic credentials.
- **IPFS Integration**: Encrypted certificate documents are stored off-chain on IPFS (via Pinata/Web3.storage), ensuring immutability without bloating the blockchain.
- **Revocation System**: Institutions have the ability to revoke or suspend fraudulent or erroneous credentials.
- **Dark Mode**: Fully responsive UI with system-aware dark mode support.

---

## 📸 Screenshots

*(Add your screenshots here)*

| Landing Page | Dashboard |
|:---:|:---:|
| ![Landing Page Placeholder](https://via.placeholder.com/600x350?text=Landing+Page) | ![Dashboard Placeholder](https://via.placeholder.com/600x350?text=Student+Dashboard) |

| Issue Credential | Verification Page |
|:---:|:---:|
| ![Issue Credential Placeholder](https://via.placeholder.com/600x350?text=Issue+Credential) | ![Verification Placeholder](https://via.placeholder.com/600x350?text=Verify+Credential) |

> **Note:** To update screenshots, place your images in a `screenshots/` directory at the root of the project and replace the placeholder URLs in this README.

---

## 🏗️ Architecture & How It Works

1. **Institutions are Authorized**: The admin (contract owner) registers recognized institutions (e.g., Universities).
2. **Document Upload**: An institution creates a certificate document, which is then uploaded to **IPFS**, generating a unique CID (Content Identifier).
3. **Minting the Credential**: The institution calls the `issueCredential` smart contract function, passing the student's wallet address, the IPFS CID, and a unique document hash.
4. **Soulbound NFT**: A non-transferable ERC721 token (Soulbound Token) is minted to the student's wallet. The student cannot sell or transfer this certificate.
5. **Verification**: Employers or third parties can enter the certificate's hash on the platform's verification page. The smart contract confirms if the hash is valid, active, and issued by an authorized institution.

---

## 📂 Folder Structure

```text
FakeAcademicCertificateDApp/
├── frontend/                   # Next.js Frontend Application
│   ├── app/                    # Next.js 14 App Router (Pages & Layouts)
│   ├── components/             # Reusable UI components (Navbar, Cards, Web3 Connect)
│   ├── hooks/                  # Custom React hooks (Wagmi contract interactions)
│   ├── interfaces/             # TypeScript type definitions
│   ├── lib/                    # Utilities, wagmi config, and contract ABIs
│   ├── styles/                 # Tailwind CSS and global styling tokens
│   └── package.json            # Frontend dependencies
│
├── smart-contracts/            # Foundry Smart Contract Environment
│   ├── src/                    # Solidity smart contracts (AcademicCredential.sol)
│   ├── test/                   # Foundry tests for smart contracts
│   ├── script/                 # Deployment and interaction scripts
│   ├── foundry.toml            # Foundry configuration
│   └── README.md               # Specific instructions for smart contracts
│
└── README.md                   # Project documentation (This file)
```

---

## 💻 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, Tailwind CSS, Radix UI, Framer Motion
- **Web3 / Blockchain**: Solidity, Foundry (Forge/Anvil/Cast), Ethers.js, Wagmi, Viem
- **Storage**: IPFS (InterPlanetary File System)

---

## 🛠️ Commands to Run the Project

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Foundry](https://book.getfoundry.sh/getting-started/installation) installed on your machine
- A Web3 Wallet (like MetaMask)

### 1. Smart Contracts Setup

Open a terminal and navigate to the `smart-contracts` folder:

```bash
cd smart-contracts
```

**Build the contracts:**
```bash
forge build
```

**Run tests:**
```bash
forge test
```

**Start local Ethereum node (Anvil):**
```bash
anvil
```

**Deploy contracts to local network:**
Open a new terminal window, keeping Anvil running:
```bash
cd smart-contracts
forge script script/Deploy.s.sol --rpc-url http://127.0.0.1:8545 --broadcast
```
*(Make sure to copy the deployed contract address from the terminal output).*

### 2. Frontend Setup

Open a new terminal and navigate to the `frontend` folder:

```bash
cd frontend
```

**Install dependencies:**
```bash
npm install
```

**Environment Variables:**
Create a `.env.local` file in the `frontend` directory based on the `.env.example` file (if available), or create one manually:
```env
NEXT_PUBLIC_CONTRACT_ADDRESS="your_deployed_contract_address_here"
# Add any required IPFS or RPC URLs
```

**Run the development server:**
```bash
npm run dev
```

The application will be running at [http://localhost:3000](http://localhost:3000).

---

## 📜 License

This project is licensed under the MIT License.

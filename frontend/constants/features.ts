import { Shield, Lock, Globe, Zap, FileCheck, GraduationCap } from "lucide-react";

export const FEATURES = [
  {
    icon: Shield,
    title: "Tamper-Proof Credentials",
    desc: "Cryptographic hashes stored on Ethereum/Polygon make credentials impossible to forge or alter.",
  },
  {
    icon: Lock,
    title: "Soulbound NFTs",
    desc: "Non-transferable certificates are permanently bound to the recipient's wallet address.",
  },
  {
    icon: Globe,
    title: "Decentralized Storage",
    desc: "Credential data encrypted and stored on IPFS for censorship-resistant, permanent access.",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    desc: "Anyone can verify credential authenticity in seconds by querying the smart contract.",
  },
  {
    icon: FileCheck,
    title: "Revocation Support",
    desc: "Institutions can revoke or suspend fraudulent credentials with on-chain audit trails.",
  },
  {
    icon: GraduationCap,
    title: "Student Control",
    desc: "Students own their credentials and control who can access their academic records.",
  },
];
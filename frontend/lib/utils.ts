// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ethers } from "ethers";
import { CredentialStatus, type CredentialStatusKey } from "./contract";

// ── Tailwind class merger ──────────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── Address formatting ────────────────────────────────────────────────────────
export function truncateAddress(address: string, startChars = 6, endChars = 4): string {
  if (!address) return "";
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

// ── Date formatting ───────────────────────────────────────────────────────────
export function formatTimestamp(timestamp: bigint | number): string {
  if (!timestamp) return "Never";
  const ts = typeof timestamp === "bigint" ? Number(timestamp) : timestamp;
  if (ts === 0) return "No expiry";
  return new Date(ts * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTimestampFull(timestamp: bigint | number): string {
  if (!timestamp) return "—";
  const ts = typeof timestamp === "bigint" ? Number(timestamp) : timestamp;
  if (ts === 0) return "No expiry";
  return new Date(ts * 1000).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ── Credential hash (SHA-256 via ethers) ──────────────────────────────────────
export function computeCredentialHash(data: {
  studentAddress: string;
  credentialType: string;
  institutionName: string;
  issuedAt: number;
  ipfsCID: string;
}): `0x${string}` {
  const encoded = ethers.AbiCoder.defaultAbiCoder().encode(
    ["address", "string", "string", "uint256", "string"],
    [
      data.studentAddress,
      data.credentialType,
      data.institutionName,
      data.issuedAt,
      data.ipfsCID,
    ]
  );
  return ethers.keccak256(encoded) as `0x${string}`;
}

// ── Hash a string to bytes32 ──────────────────────────────────────────────────
export function hashString(value: string): `0x${string}` {
  return ethers.keccak256(ethers.toUtf8Bytes(value)) as `0x${string}`;
}

// ── Status helpers ────────────────────────────────────────────────────────────
export function getStatusLabel(status: number): string {
  return CredentialStatus[status as CredentialStatusKey] ?? "Unknown";
}

export function getStatusVariant(
  status: number
): "active" | "revoked" | "suspended" | "unknown" {
  switch (status) {
    case 0: return "active";
    case 1: return "revoked";
    case 2: return "suspended";
    default: return "unknown";
  }
}

export function isCredentialExpired(expiresAt: bigint | number): boolean {
  const ts = typeof expiresAt === "bigint" ? Number(expiresAt) : expiresAt;
  if (ts === 0) return false;
  return Date.now() / 1000 > ts;
}

// ── Copy to clipboard ─────────────────────────────────────────────────────────
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// ── IPFS URL helper ───────────────────────────────────────────────────────────
export function ipfsToHttp(cid: string): string {
  if (!cid) return "#";
  if (cid.startsWith("http")) return cid;
  return `https://ipfs.io/ipfs/${cid}`;
}

// ── Validation ────────────────────────────────────────────────────────────────
export function isValidAddress(address: string): boolean {
  try {
    ethers.getAddress(address);
    return true;
  } catch {
    return false;
  }
}

export function isValidBytes32(value: string): boolean {
  return /^0x[0-9a-fA-F]{64}$/.test(value);
}

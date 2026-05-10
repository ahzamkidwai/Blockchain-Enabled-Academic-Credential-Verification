// // hooks/useStudentCredentials.ts
// import { useMemo } from "react";
// import { useReadContract, useReadContracts } from "wagmi";
// import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";
// import type { Credential } from "@/lib/types";

// export function useStudentCredentialHashes(studentAddress?: `0x${string}`) {
//   const { data, isLoading, error, refetch } = useReadContract({
//     address: CONTRACT_ADDRESS,
//     abi: CREDENTIAL_ABI,
//     functionName: "getCertificatesOfStudent", // ✅ correct function
//     args: studentAddress ? [studentAddress] : undefined,
//     query: { enabled: !!studentAddress },
//   });

//   return {
//     hashes: (data as `0x${string}`[] | undefined) ?? [],
//     isLoading,
//     error,
//     refetch,
//   };
// }

// export function useStudentCredentials(studentAddress?: `0x${string}`) {
//   // 🔹 Step 1: Get hashes
//   const { hashes, isLoading: loadingHashes } =
//     useStudentCredentialHashes(studentAddress);

//   // 🔹 Step 2: Fetch credentials by hash
//   const credentialContracts = useMemo(
//     () =>
//       hashes.map((hash) => ({
//         address: CONTRACT_ADDRESS,
//         abi: CREDENTIAL_ABI,
//         functionName: "getCredentialByHash" as const,
//         args: [hash] as const,
//       })),
//     [hashes]
//   );

//   const {
//     data: credentialData,
//     isLoading: loadingCredentials,
//   } = useReadContracts({
//     contracts: credentialContracts,
//     query: { enabled: credentialContracts.length > 0 },
//   });

//   // 🔹 Step 3: Extract issuers (deduplicated)
//   const issuers = useMemo(() => {
//     if (!credentialData) return [];

//     const unique = new Set<string>();

//     credentialData.forEach((r) => {
//       if (r.status === "success" && r.result) {
//         const [, issuer] = r.result;
//         unique.add(issuer);
//       }
//     });

//     return Array.from(unique) as `0x${string}`[];
//   }, [credentialData]);

//   // 🔹 Step 4: Fetch institution details
//   const institutionContracts = useMemo(
//     () =>
//       issuers.map((issuer) => ({
//         address: CONTRACT_ADDRESS,
//         abi: CREDENTIAL_ABI,
//         functionName: "getInstitution" as const,
//         args: [issuer] as const,
//       })),
//     [issuers]
//   );

//   const {
//     data: institutionData,
//     isLoading: loadingInstitutions,
//   } = useReadContracts({
//     contracts: institutionContracts,
//     query: { enabled: institutionContracts.length > 0 },
//   });

//   // 🔹 Step 5: Map issuer → institution name
//   const institutionMap = useMemo(() => {
//     const map: Record<string, string> = {};

//     issuers.forEach((issuer, index) => {
//       const inst = institutionData?.[index];

//       if (inst?.status === "success" && inst.result) {
//         const [name] = inst.result;
//         map[issuer] = name;
//       }
//     });

//     return map;
//   }, [issuers, institutionData]);

//   // 🔹 Step 6: Build final credentials
//   const credentials: Credential[] = useMemo(() => {
//     if (!credentialData) return [];

//     return credentialData
//       .map((r, index) => {
//         if (r.status !== "success" || !r.result) return null;

//         const [ipfsHash, issuer, student, revoked] = r.result;

//         return {
//           tokenId: BigInt(index + 1), // ⚠️ still fallback
//           ipfsHash,
//           issuer,
//           student,
//           revoked,
//           status: revoked ? 1 : 0,
//           credentialType: "Degree", // optional
//           institutionName: institutionMap[issuer] ?? "Unknown", // ✅ real name
//         };
//       })
//       .filter(Boolean) as Credential[];
//   }, [credentialData, institutionMap]);

//   return {
//     credentials,
//     isLoading:
//       loadingHashes || loadingCredentials || loadingInstitutions,
//   };
// }




import { useMemo } from "react";
import { useReadContract, useReadContracts } from "wagmi";
import { CREDENTIAL_ABI, CONTRACT_ADDRESS } from "@/lib/contract";
import type { Credential, StudentCredentialStruct } from "@/lib/types";

export function useStudentCredentials(studentAddress?: `0x${string}`) {
  // 🔹 Step 1: Fetch all credentials (single call)
  const {
    data,
    isLoading: loadingCredentials,
    error,
    refetch,
  } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CREDENTIAL_ABI,
    functionName: "getStudentCertificateDetails",
    args: studentAddress ? [studentAddress] : undefined,
    query: { enabled: !!studentAddress },
  });

  // 🔹 Step 2: Extract unique issuers
  const issuers = useMemo(() => {
    if (!data) return [];

    const unique = new Set<string>();

    (data as any[]).forEach((item: any) => {
      const issuer = Array.isArray(item) ? item[4] : item.issuer;
      if (issuer) unique.add(issuer);
    });

    return Array.from(unique) as `0x${string}`[];
  }, [data]);

  // 🔹 Step 3: Fetch institution details
  const institutionContracts = useMemo(
    () =>
      issuers.map((issuer) => ({
        address: CONTRACT_ADDRESS,
        abi: CREDENTIAL_ABI,
        functionName: "getInstitution" as const,
        args: [issuer] as const,
      })),
    [issuers]
  );

  const {
    data: institutionData,
    isLoading: loadingInstitutions,
  } = useReadContracts({
    contracts: institutionContracts,
    query: { enabled: institutionContracts.length > 0 },
  });

  // 🔹 Step 4: Map issuer → institution name
  const institutionMap = useMemo(() => {
    const map: Record<string, string> = {};

    issuers.forEach((issuer, index) => {
      const inst = institutionData?.[index];

      if (inst?.status === "success" && inst.result) {
        const [name, country] = inst.result;
        map[issuer] = `${name} ${country}`;
      }
    });

    return map;
  }, [issuers, institutionData]);

  // 🔹 Step 5: Build final credentials
  const credentials: StudentCredentialStruct[] = useMemo(() => {
    if (!data) return [];

    return (data as any[])
      .map((item) => {
        const tokenId = Array.isArray(item) ? item[0] : item.tokenId;
        const ipfsHash = Array.isArray(item) ? item[1] : item.ipfsHash;
        const fileHash = Array.isArray(item) ? item[2] : item.fileHash;
        const revoked = Array.isArray(item) ? item[3] : item.revoked;
        const issuer = Array.isArray(item) ? item[4] : item.issuer;
        const credentialType = Array.isArray(item) ? item[5] : item.credentialType;
        const expiresAt = Array.isArray(item) ? item[6] : item.expiresAt;
        const issuedAt = Array.isArray(item) ? item[7] : item.issuedAt;

        return {
          tokenId,
          ipfsHash,
          fileHash,
          revoked,
          issuer,
          credentialType,
          expiresAt,
          issuedAt,
          status: revoked ? 1 : 0,
          institutionName: institutionMap[issuer] ?? "Unknown",
        };
      });
  }, [data, institutionMap]);

  return {
    credentials,
    isLoading: loadingCredentials || loadingInstitutions,
    error,
    refetch,
  };
}
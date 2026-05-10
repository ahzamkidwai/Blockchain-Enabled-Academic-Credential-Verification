// lib/generateCertificate.ts
// In-browser PDF certificate generator using pdf-lib + qrcode

import { PDFDocument, rgb, StandardFonts, degrees } from "pdf-lib";
import QRCode from "qrcode";

export interface CertificateData {
  studentName: string;
  courseName: string;
  universityName: string;
  date: string; // e.g. "March 28, 2026"
  verifyUrl?: string; // URL to embed in QR
}

export interface GeneratedCertificate {
  pdfBytes: Uint8Array;
  blob: Blob;
  dataUrl: string;
}

// ── Colour palette (matches AcadChain brand) ─────────────────────────────────
const NAVY = rgb(0.05, 0.12, 0.29);       // deep navy
const GOLD = rgb(0.82, 0.67, 0.18);       // gold accent
const GOLD_LIGHT = rgb(0.96, 0.9, 0.6);   // lighter gold
const OFF_WHITE = rgb(0.97, 0.96, 0.93);  // parchment
const DARK_GREY = rgb(0.2, 0.2, 0.2);

async function generateQRCodePng(url: string): Promise<Uint8Array> {
  const dataUrl = await QRCode.toDataURL(url, {
    width: 140,
    margin: 1,
    color: { dark: "#0D1E4A", light: "#FFFFFF" },
  });
  // strip "data:image/png;base64," prefix and decode
  const base64 = dataUrl.split(",")[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function generateCertificatePDF(
  data: CertificateData
): Promise<GeneratedCertificate> {
  const { studentName, courseName, universityName, date, verifyUrl } = data;

  const doc = await PDFDocument.create();

  // A4 Landscape: 842 × 595 pts
  const page = doc.addPage([842, 595]);
  const { width, height } = page.getSize();

  // ── Load fonts ─────────────────────────────────────────────────────────────
  const timesRoman       = await doc.embedFont(StandardFonts.TimesRoman);
  const timesBold        = await doc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic      = await doc.embedFont(StandardFonts.TimesRomanItalic);
  const helvetica        = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold    = await doc.embedFont(StandardFonts.HelveticaBold);

  // ── Background ─────────────────────────────────────────────────────────────
  // Full navy background
  page.drawRectangle({ x: 0, y: 0, width, height, color: NAVY });

  // Inner parchment panel
  const pad = 28;
  page.drawRectangle({
    x: pad,
    y: pad,
    width: width - pad * 2,
    height: height - pad * 2,
    color: OFF_WHITE,
    borderColor: GOLD,
    borderWidth: 2.5,
  });

  // Thin inner border
  page.drawRectangle({
    x: pad + 8,
    y: pad + 8,
    width: width - pad * 2 - 16,
    height: height - pad * 2 - 16,
    borderColor: GOLD_LIGHT,
    borderWidth: 0.8,
    color: rgb(0, 0, 0), // transparent
  });

  // ── Header banner ──────────────────────────────────────────────────────────
  page.drawRectangle({
    x: pad,
    y: height - pad - 80,
    width: width - pad * 2,
    height: 80,
    color: NAVY,
  });

  // Institution name in gold on header
  const uniText = universityName.toUpperCase();
  const uniWidth = helveticaBold.widthOfTextAtSize(uniText, 15);
  page.drawText(uniText, {
    x: (width - uniWidth) / 2,
    y: height - pad - 42,
    size: 15,
    font: helveticaBold,
    color: GOLD,
  });

  // Sub-line
  const subLine = "OFFICE OF THE REGISTRAR";
  const subWidth = helvetica.widthOfTextAtSize(subLine, 9);
  page.drawText(subLine, {
    x: (width - subWidth) / 2,
    y: height - pad - 60,
    size: 9,
    font: helvetica,
    color: GOLD_LIGHT,
  });

  // ── Gold decorative line below header ──────────────────────────────────────
  page.drawLine({
    start: { x: pad + 50, y: height - pad - 90 },
    end:   { x: width - pad - 50, y: height - pad - 90 },
    thickness: 1.5,
    color: GOLD,
    dashArray: [6, 3],
  });

  // ── "CERTIFICATE OF COMPLETION" title ─────────────────────────────────────
  const title = "CERTIFICATE OF COMPLETION";
  const titleSize = 28;
  const titleWidth = timesBold.widthOfTextAtSize(title, titleSize);
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y: height - pad - 140,
    size: titleSize,
    font: timesBold,
    color: NAVY,
  });

  // ── "This is to certify that" ─────────────────────────────────────────────
  const certLine = "This is to certify that";
  const certWidth = timesItalic.widthOfTextAtSize(certLine, 14);
  page.drawText(certLine, {
    x: (width - certWidth) / 2,
    y: height - pad - 170,
    size: 14,
    font: timesItalic,
    color: DARK_GREY,
  });

  // ── Student Name ──────────────────────────────────────────────────────────
  // Underline area
  const nameSize = 36;
  const nameWidth = timesBold.widthOfTextAtSize(studentName, nameSize);
  const nameX = (width - nameWidth) / 2;
  const nameY = height - pad - 218;

  page.drawText(studentName, {
    x: nameX,
    y: nameY,
    size: nameSize,
    font: timesBold,
    color: NAVY,
  });

  // Ornamental underline
  page.drawLine({
    start: { x: nameX - 10, y: nameY - 6 },
    end:   { x: nameX + nameWidth + 10, y: nameY - 6 },
    thickness: 1.2,
    color: GOLD,
  });

  // ── "has successfully completed" ─────────────────────────────────────────
  const compLine = "has successfully completed the requirements for";
  const compWidth = timesRoman.widthOfTextAtSize(compLine, 13);
  page.drawText(compLine, {
    x: (width - compWidth) / 2,
    y: height - pad - 250,
    size: 13,
    font: timesRoman,
    color: DARK_GREY,
  });

  // ── Course Name ───────────────────────────────────────────────────────────
  const courseSize = 22;
  const courseWidth = timesBold.widthOfTextAtSize(courseName, courseSize);
  page.drawText(courseName, {
    x: (width - courseWidth) / 2,
    y: height - pad - 282,
    size: courseSize,
    font: timesBold,
    color: rgb(0.1, 0.3, 0.6),
  });

  // ── Gold divider ──────────────────────────────────────────────────────────
  const divY = height - pad - 305;
  page.drawLine({
    start: { x: pad + 80, y: divY },
    end:   { x: width - pad - 80, y: divY },
    thickness: 0.8,
    color: GOLD_LIGHT,
  });

  // ── Date + Issuer row ─────────────────────────────────────────────────────
  // Left: Issued on
  page.drawText("Issued on:", {
    x: pad + 60,
    y: divY - 30,
    size: 10,
    font: helvetica,
    color: DARK_GREY,
  });
  page.drawText(date, {
    x: pad + 60,
    y: divY - 48,
    size: 14,
    font: timesBold,
    color: NAVY,
  });

  // Right: Blockchain Verified
  const bvText = "Blockchain Verified";
  const bvWidth = helveticaBold.widthOfTextAtSize(bvText, 10);
  page.drawText(bvText, {
    x: width - pad - 60 - bvWidth,
    y: divY - 30,
    size: 10,
    font: helveticaBold,
    color: GOLD,
  });
  const bvSub = "AcadChain · Soulbound NFT";
  const bvSubWidth = helvetica.widthOfTextAtSize(bvSub, 8);
  page.drawText(bvSub, {
    x: width - pad - 60 - bvSubWidth,
    y: divY - 45,
    size: 8,
    font: helvetica,
    color: rgb(0.4, 0.4, 0.4),
  });

  // ── Signature line (center) ───────────────────────────────────────────────
  const sigY = divY - 35;
  const sigCenterX = width / 2;
  page.drawLine({
    start: { x: sigCenterX - 70, y: sigY },
    end:   { x: sigCenterX + 70, y: sigY },
    thickness: 0.8,
    color: DARK_GREY,
  });
  const sigLabel = "Authorized Signatory";
  const sigWidth = helvetica.widthOfTextAtSize(sigLabel, 8);
  page.drawText(sigLabel, {
    x: sigCenterX - sigWidth / 2,
    y: sigY - 14,
    size: 8,
    font: helvetica,
    color: rgb(0.4, 0.4, 0.4),
  });

  // ── QR code (bottom right, inside border) ────────────────────────────────
  const qrSize = 72;
  const qrX = width - pad - 20 - qrSize;
  const qrY = pad + 20;

  try {
    const qrUrl = verifyUrl ?? "http://localhost:3000/verify";
    const qrPng = await generateQRCodePng(qrUrl);
    const qrImage = await doc.embedPng(qrPng);
    page.drawImage(qrImage, { x: qrX, y: qrY, width: qrSize, height: qrSize });

    // QR label
    const qrLabel = "Scan to Verify";
    const qrLabelWidth = helvetica.widthOfTextAtSize(qrLabel, 7);
    page.drawText(qrLabel, {
      x: qrX + (qrSize - qrLabelWidth) / 2,
      y: qrY - 12,
      size: 7,
      font: helvetica,
      color: DARK_GREY,
    });
  } catch {
    // QR generation failure is non-fatal
  }

  // ── Watermark (faint diagonal text) ──────────────────────────────────────
  page.drawText("ACADCHAIN", {
    x: 180,
    y: 160,
    size: 90,
    font: helveticaBold,
    color: rgb(0.05, 0.12, 0.29),
    opacity: 0.04,
    rotate: degrees(30),
  });

  // ── Footer ────────────────────────────────────────────────────────────────
  const footer = "This certificate is issued as a tamper-proof Soulbound NFT on the Ethereum blockchain.";
  const footerWidth = helvetica.widthOfTextAtSize(footer, 7);
  page.drawText(footer, {
    x: (width - footerWidth) / 2,
    y: pad + 10,
    size: 7,
    font: helvetica,
    color: rgb(0.5, 0.5, 0.5),
  });

  // ── Serialise ─────────────────────────────────────────────────────────────
  const pdfBytes = await doc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  // Convert to base64 data-url
  const base64 = btoa(
    Array.from(pdfBytes)
      .map((b) => String.fromCharCode(b))
      .join("")
  );
  const dataUrl = `data:application/pdf;base64,${base64}`;

  return { pdfBytes, blob, dataUrl };
}

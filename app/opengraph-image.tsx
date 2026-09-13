import { ImageResponse } from "next/og";
export const alt = "Jorge Jacome — Frontend engineering and applied AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ background: "#101512", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "#f0f2e9" }}><div style={{ fontSize: 28, display: "flex" }}>Jorge Jacome</div><div style={{ display: "flex", flexDirection: "column", fontSize: 76, letterSpacing: -3 }}><span>Frontend platforms.</span><span style={{ color: "#b9ec86" }}>Applied AI. Shared direction.</span></div><div style={{ fontSize: 24, color: "#abb5ad", display: "flex" }}>Oracle · ESPN / Disney · American Express</div></div>, size); }

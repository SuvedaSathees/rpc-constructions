import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RPC Constructions",
    short_name: "RPC",
    description: "Waterproofing, leak repair and construction in Erode, Coimbatore, Krishnagiri and Chennai.",
    start_url: "/",
    display: "standalone",
    background_color: "#eeeae3",
    theme_color: "#0b2350",
    icons: [{ src: "/logo.png", sizes: "512x512", type: "image/png" }],
  };
}

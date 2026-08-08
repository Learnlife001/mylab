import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";

export const metadata: Metadata = {
  title: "GregLabs — Things for the web",
  description: "A growing collection of digital projects by GregLabs.",
  openGraph: { title: "GregLabs — Things for the web", description: "A growing collection of digital projects by GregLabs.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "GregLabs — Things for the web", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

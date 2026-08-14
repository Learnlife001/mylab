Exit code: 0
Wall time: 2 seconds
Output:
import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greglabs.nl"),
  title: "GregLabs â€” Things for the web",
  description: "A living collection of security systems, APIs, web applications, and digital experiences built by GregLabs.",
  keywords: ["GregLabs", "web development", "AI builder", "cybersecurity", "FastAPI", "Next.js", "portfolio"],
  authors: [{ name: "Chigozie G. Okuma" }],
  creator: "GregLabs",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "GregLabs",
    title: "GregLabs â€” Things for the web",
    description: "Security systems, APIs, web applications, and digital experiences by GregLabs.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "GregLabs project hub" }],
  },
  twitter: { card: "summary_large_image", title: "GregLabs â€” Things for the web", description: "Security systems, APIs, web applications, and digital experiences by GregLabs.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}


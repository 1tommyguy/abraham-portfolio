import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wilson Abraham Tommy | Software & Automation Engineer",
    template: "%s | Wilson Abraham Tommy",
  },
  description:
    "Software & Automation Engineer, Python Developer, and Junior Web Developer based in Lagos, Nigeria. Building intelligent automation systems, secure web solutions, and AI/ML workflows.",
  keywords: [
    "Wilson Abraham Tommy",
    "Software Engineer",
    "Automation Engineer",
    "Python Developer",
    "Web Developer",
    "Lagos Nigeria",
    "Cybersecurity",
    "AI ML",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Wilson Abraham Tommy", url: "https://github.com/tommydevsec" }],
  creator: "Wilson Abraham Tommy",
  publisher: "Wilson Abraham Tommy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tommydevsec.github.io/abraham-portfolio",
    title: "Wilson Abraham Tommy | Software & Automation Engineer",
    description:
      "Software & Automation Engineer, Python Developer, and Junior Web Developer based in Lagos, Nigeria. Building intelligent automation systems, secure web solutions, and AI/ML workflows.",
    siteName: "Wilson Abraham Tommy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wilson Abraham Tommy - Software & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Abraham Tommy | Software & Automation Engineer",
    description:
      "Software & Automation Engineer, Python Developer, and Junior Web Developer based in Lagos, Nigeria.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0010" },
    { media: "(prefers-color-scheme: light)", color: "#0d0010" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0d0010] text-[#e2d9f3] overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Scanline overlay for CRT effect */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          }}
        />

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}

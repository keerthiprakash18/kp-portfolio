import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05080f",
};

export const metadata: Metadata = {
  title: "Keerthi Prakash T — Data Analyst & Product Developer",
  description:
    "Data Analyst, Business Analytics specialist & AI-Assisted Product Developer. Turning data into decisions and ideas into real products. Skilled in SQL, Python, Power BI, Excel, and full-stack development.",
  keywords: [
    "Data Analyst",
    "Business Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Data Analytics",
    "Business Intelligence",
    "Machine Learning",
    "Keerthi Prakash",
    "Portfolio",
  ],
  authors: [{ name: "Keerthi Prakash T" }],
  creator: "Keerthi Prakash T",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://keerthiprakashportfolio.vercel.app",
    siteName: "Keerthi Prakash T — Portfolio",
    title: "Keerthi Prakash T — Data Analyst & Product Developer",
    description:
      "Data Analyst, Business Analytics specialist & AI-Assisted Product Developer. Turning data into decisions and ideas into real products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keerthi Prakash T — Data Analyst & Product Developer",
    description:
      "Data Analyst, Business Analytics specialist & AI-Assisted Product Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

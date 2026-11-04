import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://keerthiprakashportfolio.vercel.app"),
  title: "Keerthi Prakash T | Data Analyst & AI-Assisted Product Developer",
  description:
    "Data Analyst graduating with B.Tech in Artificial Intelligence & Data Science (CARE College of Engineering, CGPA 7.29). Specialized in SQL, Python, Power BI, Advanced Excel, and production systems. Creator of FC Arena & published author in IJFMR.",
  keywords: [
    "Keerthi Prakash T",
    "Data Analyst",
    "Business Analyst",
    "BI Analyst",
    "SQL Specialist",
    "Python Data Science",
    "Power BI Dashboards",
    "FC Arena",
    "CARE College of Engineering",
    "AI-Assisted Developer",
  ],
  authors: [{ name: "Keerthi Prakash T", url: "https://keerthiprakashportfolio.vercel.app" }],
  creator: "Keerthi Prakash T",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keerthiprakashportfolio.vercel.app",
    siteName: "Keerthi Prakash T Portfolio",
    title: "Keerthi Prakash T | Data Analyst & AI-Assisted Developer",
    description:
      "Turning Data into Decisions. Building Ideas into Real Products. Explore interactive SQL studio, verified research, and live deployments.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Keerthi Prakash T — Data Analyst & Product Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keerthi Prakash T | Data Analyst & Product Developer",
    description: "Explore interactive SQL Data Lab, live full-stack projects, and verified research publication.",
    images: ["/profile.jpg"],
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
  // Structured Data (JSON-LD) for Google & LinkedIn SEO indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Keerthi Prakash T",
    jobTitle: "Data Analyst",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "CARE College of Engineering",
    },
    knowsAbout: [
      "Data Analytics",
      "Business Intelligence",
      "SQL",
      "PostgreSQL",
      "Python",
      "Pandas",
      "Power BI",
      "Advanced Excel",
      "Full-Stack Development",
    ],
    url: "https://keerthiprakashportfolio.vercel.app",
    sameAs: [
      "https://github.com/keerthiprakash18",
      "https://linkedin.com/in/keerthiprakasht",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

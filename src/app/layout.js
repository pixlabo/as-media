import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site, ogImageAlt } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "AS Media Services — Printing, Signage & Branding Company in Delhi, India",
    template: "%s | AS Media Services",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Printing & Branding Services",
  keywords: [
    "printing company Delhi",
    "large format printing",
    "flex printing",
    "signage company India",
    "LED sign board",
    "ACP signage",
    "acrylic signage",
    "3D letters",
    "fabrication services",
    "retail branding",
    "vehicle branding",
    "UV printing",
    "branding company Delhi",
    "AS Media Services",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "AS Media Services — Printing, Signage & Branding Across India",
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Media Services — Printing, Signage & Branding",
    description: site.shortDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  // 👉 After registering in Google Search Console, paste your token here:
  // verification: { google: "your-verification-code" },
};

export const viewport = {
  themeColor: "#e4002b",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Nunito } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Bé Học Nói Tiếng Việt",
  description: "Website học nói tiếng Việt đơn giản cho trẻ nhỏ.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/icon-192.svg", type: "image/svg+xml" }],
  },
  applicationName: "Bé Học Nói",
};

export const viewport: Viewport = {
  themeColor: "#FFF9ED",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

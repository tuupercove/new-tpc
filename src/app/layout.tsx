import type { Metadata } from "next";
import { Geist, Geist_Mono, Itim } from "next/font/google";
import "./globals.css";

const itimSans = Itim({
  variable: "--font-itim-sans",
  subsets: ["latin"],
  weight: "400"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TuuperCove | Find your own SIMP!",
  description: "A land of kingdoms for simp by simp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${itimSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

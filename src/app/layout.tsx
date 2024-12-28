import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: 'swap', // Optimize font loading
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DevAura | Professional Portfolio",
  description: "Professional portfolio created by Abhishek Singh",
  keywords: ["portfolio", "developer", "web development", "react", "next.js"],
  authors: [{ name: "Abhishek Singh" }],
  openGraph: {
    title: "DevAura",
    description: "Professional Portfolio by Abhishek Singh",
    type: "website",
  },
  icons: {
    icon: "/kratos.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "min-h-screen bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

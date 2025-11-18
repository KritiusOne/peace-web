import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { AppSidebar } from "@/components/aside/SidebarApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peace Web",
  description: "Peace web application created with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-1000 text-neutral-100 scheme-`}
      >
        <Header />
        <div className="flex h-screen pt-20 gap-4">
          <AppSidebar />
          <main className="flex-1 overflow-auto p-6 bg-neutral-1000">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

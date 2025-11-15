import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
 <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 text-neutral-100`}
      >
        <header className="fixed top-0 left-0 right-0 h-20 border-b border-neutral-700 flex items-center px-4 bg-neutral-900 z-20">
          <div className="text-2xl font-bold">
            Something
          </div>
        </header>
        <div className="flex h-screen pt-20 gap-4">
          <SidebarProvider className="w-1/5 min-w-[200px] max-w-[300px]">
            <AppSidebar />
          </SidebarProvider>

          <main className="flex-1 overflow-auto p-6 bg-neutral-900">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

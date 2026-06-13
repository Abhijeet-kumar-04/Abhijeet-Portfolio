import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhijeet Kumar | Backend & AI Engineer",
  description: "Personal portfolio of Abhijeet Kumar, a Backend & AI Engineer focused on building high-performance architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white font-sans selection:bg-blue-500/30 selection:text-white">
        
        {/* Global Noise Texture Overlay */}
        <div 
          className="fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {children}
      </body>
    </html>
  );
}

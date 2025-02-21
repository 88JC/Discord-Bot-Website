import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { ThemeProvider } from '@/components/theme-provider'

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Bot - Your Bot Name",
  description: "The perfect Discord bot for your server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100/90 dark:from-[#1F1300] dark:via-amber-950 dark:to-amber-900/30 transition-all duration-300">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gradient-to-tl from-amber-200/40 via-amber-100/60 to-amber-50/80 dark:from-amber-900/30 dark:via-amber-800/10 dark:to-black/20" />
              
              <div className="absolute inset-0 bg-[radial-gradient(#D97706_0.8px,transparent_0.8px)] dark:bg-[radial-gradient(#FDE68A_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.15] dark:opacity-[0.08]" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 via-transparent to-amber-200/20 dark:from-amber-500/10 dark:via-transparent dark:to-amber-400/10 animate-gradient-slow" />
              
              <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-amber-300 to-amber-400/50 dark:from-amber-500/30 dark:to-amber-600/20 rounded-full mix-blend-soft-light dark:mix-blend-soft-light filter blur-[120px] animate-pulse" />
              <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-amber-400/50 to-amber-300 dark:from-amber-600/20 dark:to-amber-500/30 rounded-full mix-blend-soft-light dark:mix-blend-soft-light filter blur-[120px] animate-pulse delay-1000" />
              
              <div className="opacity-30 dark:opacity-50">
                <ParticleBackground />
              </div>
            </div>

            <div className="relative">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

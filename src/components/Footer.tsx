"use client";

import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { useTheme } from 'next-themes';
import navigation from "@/data/navigation.json";

const Footer = () => {
  // const { theme, setTheme } = useTheme();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/90 to-amber-200/95 dark:via-amber-950/80 dark:to-[#1F1300]/90 backdrop-blur-md -z-10" />
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-300/20 via-transparent to-transparent dark:from-amber-500/10" />
      
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-300/40 to-amber-400/30 dark:from-amber-500/20 dark:to-amber-600/10 rounded-full mix-blend-soft-light filter blur-[100px] animate-pulse" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-amber-400/30 to-amber-300/40 dark:from-amber-600/10 dark:to-amber-500/20 rounded-full mix-blend-soft-light filter blur-[100px] animate-pulse delay-700" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 dark:from-amber-400/20 dark:to-amber-500/5 flex items-center justify-center transform transition-all group-hover:rotate-12 backdrop-blur-sm border border-amber-200/10 dark:border-amber-100/10">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 dark:from-amber-200 dark:to-amber-100 text-transparent bg-clip-text">B</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">BotName</h3>
            </div>
            <p className="text-sm text-amber-800/90 dark:text-amber-300/90">
              The perfect Discord bot for your server. Enhance your Discord experience with powerful features.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-600/5 dark:from-amber-400/10 dark:to-amber-500/5 hover:from-amber-500/15 hover:to-amber-600/10 dark:hover:from-amber-400/15 dark:hover:to-amber-500/10 flex items-center justify-center transition-all border border-amber-200/10 dark:border-amber-100/10 hover:scale-110 backdrop-blur-sm"
                >
                  <span className="text-amber-700 dark:text-amber-300">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-amber-900 dark:text-amber-100">Product</h4>
            <ul className="space-y-2">
              {navigation.product.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-amber-800/90 dark:text-amber-300/90 hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-amber-900 dark:text-amber-100">Resources</h4>
            <ul className="space-y-2">
              {navigation.resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-amber-800/90 dark:text-amber-300/90 hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-amber-900 dark:text-amber-100">Legal</h4>
            <ul className="space-y-2">
              {navigation.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-amber-800/90 dark:text-amber-300/90 hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-200/10 dark:border-amber-800/10 mt-8 pt-8 text-sm text-amber-800/90 dark:text-amber-300/90">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span>© 2025 BotName. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
                Powered with <span className="text-red-500 animate-pulse">❤</span> by{' '}
                <a 
                  href="https://jecky.id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                >
                  88JC
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
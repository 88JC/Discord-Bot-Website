"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-amber-100/70 dark:bg-amber-950/70 backdrop-blur-xl shadow-lg border-b border-amber-300/20 dark:border-amber-800/10' 
        : 'bg-transparent backdrop-blur-md'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200/30 to-transparent dark:from-amber-900/20 pointer-events-none" />
      
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 dark:from-amber-400/20 dark:to-amber-500/5 flex items-center justify-center transform transition-all group-hover:rotate-12 backdrop-blur-sm border border-amber-200/10 dark:border-amber-100/10">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-700 dark:from-amber-200 dark:to-amber-100 text-transparent bg-clip-text">B</span>
            </div>
            <span className="text-amber-950 dark:text-amber-100">BotName</span>
          </Link>
          
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-amber-800/90 dark:text-amber-100/90 hover:text-amber-950 dark:hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <a
              href="#"
              className="bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 text-white px-6 py-2 rounded-xl font-medium hover:from-amber-700 hover:to-amber-800 dark:hover:from-amber-600 dark:hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/25"
            >
              Add to Discord
            </a>
          </div>

          <div className="sm:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-amber-100/10 dark:hover:bg-amber-100/10 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-900 dark:text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4 bg-amber-50/90 dark:bg-amber-900/90 backdrop-blur-xl rounded-2xl p-4 border border-amber-200/20 dark:border-amber-800/20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-amber-900 dark:text-amber-100 hover:bg-amber-100/10 dark:hover:bg-amber-100/10 px-4 py-2 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#"
                className="bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 text-white px-4 py-2 rounded-xl text-center hover:from-amber-700 hover:to-amber-800 dark:hover:from-amber-600 dark:hover:to-amber-700 transition-colors"
              >
                Add to Discord
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/commands', label: 'Commands' },
  { href: '/premium', label: 'Premium' },
  { href: '/docs', label: 'Docs' },
]; 
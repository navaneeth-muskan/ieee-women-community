"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Users, Calendar, Award, BookOpen, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Recruitment', href: '/recruitment', icon: Users },
    { name: 'Membership', href: '/membership', icon: Award },
    { name: 'Archive', href: '/events/archive', icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <span className="font-headline font-black text-xl text-white hidden md:block tracking-tighter">
                WIE HUB
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-white/60 hover:text-primary transition-colors flex items-center gap-1.5 uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/login">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/5 font-bold uppercase tracking-wider text-xs">
                Log In
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/60 hover:text-primary p-2 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-2xl text-base font-bold text-white/70 hover:text-primary hover:bg-primary/10 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <link.icon className="w-5 h-5" />
                {link.name}
              </div>
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Users, Calendar, Award, BookOpen } from 'lucide-react';
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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-wiePurple rounded-lg flex items-center justify-center">
                <span className="text-white font-headline font-bold text-xl">W</span>
              </div>
              <span className="font-headline font-bold text-xl text-wiePurple hidden md:block">
                IEEE WIE
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-wiePurple transition-colors flex items-center gap-1.5"
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
            <Link href="/login">
              <Button variant="outline" className="border-wiePurple text-wiePurple hover:bg-wiePurple/10">
                Log In
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-wiePurple p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden bg-white border-b border-border", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-wiePurple hover:bg-wiePurple/5"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <link.icon className="w-5 h-5" />
                {link.name}
              </div>
            </Link>
          ))}
          <div className="pt-4 px-3">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-wiePurple hover:bg-wiePurple/90">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

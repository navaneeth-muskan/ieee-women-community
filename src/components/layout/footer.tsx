
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-headline font-bold text-xl text-wiePurple">IEEE WIE</h3>
            <p className="text-sm text-muted-foreground">
              Advancing women in engineering and technology, and promoting women as engineers and scientists.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-wiePurple">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-wiePurple">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-wiePurple">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-wiePurple">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/events" className="text-muted-foreground hover:text-wiePurple">Upcoming Events</Link></li>
              <li><Link href="/recruitment" className="text-muted-foreground hover:text-wiePurple">Join the Core</Link></li>
              <li><Link href="/membership" className="text-muted-foreground hover:text-wiePurple">Membership Benefits</Link></li>
              <li><Link href="/feedback" className="text-muted-foreground hover:text-wiePurple">Give Feedback</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">IEEE Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://wie.ieee.org" className="text-muted-foreground hover:text-wiePurple">Global WIE Portal</Link></li>
              <li><Link href="https://www.ieee.org" className="text-muted-foreground hover:text-wiePurple">IEEE.org</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-wiePurple">IEEE Xplore</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-wiePurple">IEEE Standards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                wie-chapter@ieee.org
              </li>
              <li>123 Engineering Way, Tech City</li>
              <li>Building 4, Room 402</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} IEEE Women in Engineering Chapter. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

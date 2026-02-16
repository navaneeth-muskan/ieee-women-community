import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                 <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-headline font-black text-2xl text-white tracking-tighter">WIE HUB</h3>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Empowering women in STEM through leadership, networking, and technical innovation. The hub for future engineers.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="text-white/30 hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-white/80">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/events" className="text-white/40 hover:text-primary transition-colors">Upcoming Events</Link></li>
              <li><Link href="/recruitment" className="text-white/40 hover:text-primary transition-colors">Join the Core</Link></li>
              <li><Link href="/membership" className="text-white/40 hover:text-primary transition-colors">Membership Benefits</Link></li>
              <li><Link href="/feedback" className="text-white/40 hover:text-primary transition-colors">Give Feedback</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-white/80">IEEE Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="https://wie.ieee.org" className="text-white/40 hover:text-primary transition-colors">Global WIE Portal</Link></li>
              <li><Link href="https://www.ieee.org" className="text-white/40 hover:text-primary transition-colors">IEEE.org</Link></li>
              <li><Link href="#" className="text-white/40 hover:text-primary transition-colors">IEEE Xplore</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-white/80">Contact</h4>
            <ul className="space-y-4 text-sm text-white/40 font-medium">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                wie-chapter@ieee.org
              </li>
              <li>123 Engineering Way, Tech City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 mt-20 pt-10 text-center text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          © {new Date().getFullYear()} IEEE Women in Engineering. The AI that actually does things.
        </div>
      </div>
    </footer>
  );
}
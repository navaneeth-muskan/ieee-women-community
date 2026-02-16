import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EventCard } from '@/components/ui/event-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Star, Globe, ShieldCheck, Sparkles } from 'lucide-react';

export default function Home() {
  const upcomingEvents = [
    {
      id: '1',
      title: 'Women in AI Summit',
      date: 'Dec 15, 2024',
      location: 'Main Auditorium',
      image: PlaceHolderImages.find(img => img.id === 'event-workshop')?.imageUrl,
      category: 'Workshop',
    },
    {
      id: '2',
      title: 'Tech Leadership Panel',
      date: 'Jan 10, 2025',
      location: 'Virtual Event',
      image: PlaceHolderImages.find(img => img.id === 'event-networking')?.imageUrl,
      category: 'Seminar',
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="mb-10 animate-bounce">
          <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(255,77,77,0.4)]">
             <Sparkles className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="font-headline text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">
          IEEE <span className="text-primary italic">WIE</span> Hub
        </h1>
        
        <p className="text-primary font-bold tracking-[0.3em] text-sm md:text-base mb-8 uppercase">
          The Hub that Actually Empowers.
        </p>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground font-body leading-relaxed">
          Recruiting leaders, hosting workshops, and building the future of STEM.
          All from the world's largest technical professional organization.
        </p>

        <div className="flex flex-col sm:row items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-white/5 text-sm mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/80">WIE Partners with Tech Leaders for 2025</span>
            <ArrowRight className="w-3 h-3 text-white/40" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/recruitment">
            <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105">
              Join the Movement
            </Button>
          </Link>
          <Link href="/events">
            <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 font-bold text-lg backdrop-blur-sm">
              Explore Events
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Style "What People Say" Section */}
      <section className="py-24 bg-transparent border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
             <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-white">
              <span className="text-primary">|</span> What People Say
             </h2>
             <Link href="#" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
               View all <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "@dajaset", text: "I got up and running today with WIE and it's been nothing short of an iPhone moment for me.", avatar: "1" },
              { name: "@Cucho", text: "The future of how AI personal assistants work is @WIE. Has already helped me with research.", avatar: "2" },
              { name: "@Ashwinreads", text: "WIE might actually organize my whole project flow. Just unreal.", avatar: "3" }
            ].map((t, i) => (
              <div key={i} className="bg-secondary/30 p-8 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                    <Image src={`https://picsum.photos/seed/user${i}/100`} alt="user" width={40} height={40} />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-bold">{t.name}</div>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Highlights */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Upcoming Highlights</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The tech events that actually matter.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
            <div className="bg-primary/5 rounded-[2.5rem] p-10 border border-primary/10 flex flex-col justify-center text-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Host an Event?</h3>
              <p className="text-muted-foreground mb-8">Have a great idea for a technical session or networking mixer? Let us know!</p>
              <Link href="/feedback">
                <Button className="w-full rounded-full bg-primary text-white hover:bg-primary/90 py-6 font-bold">
                  Suggest Idea
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
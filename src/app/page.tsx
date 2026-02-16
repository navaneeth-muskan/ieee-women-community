
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EventCard } from '@/components/ui/event-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Star, Globe, ShieldCheck } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-empower')?.imageUrl;
  
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
      <section className="relative py-24 md:py-32 overflow-hidden bg-wiePurple">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image
              src={heroImage}
              alt="Hero background"
              fill
              className="object-cover opacity-20"
              priority
            />
          )}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Empowering Women in <br />
            <span className="text-ieeeBlue italic">Engineering & Technology</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-wiePurple-foreground/80 font-body">
            Join a global network of engineers and scientists dedicated to fostering 
            women in STEM through leadership, networking, and technical innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/recruitment">
              <Button size="lg" className="w-full sm:w-auto bg-white text-wiePurple hover:bg-white/90">
                Join the Movement
              </Button>
            </Link>
            <Link href="/events">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-wiePurple">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-wiePurple">40+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Annual Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-wiePurple">15+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Tech Tracks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-wiePurple">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Empowerment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline text-3xl font-bold text-wiePurple">Upcoming Highlights</h2>
              <p className="text-muted-foreground mt-2">Don't miss our latest opportunities and workshops.</p>
            </div>
            <Link href="/events" className="text-wiePurple font-semibold hover:underline flex items-center gap-1 hidden sm:flex">
              View all events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
            <div className="bg-wiePurple/5 rounded-2xl p-8 border border-wiePurple/10 flex flex-col justify-center text-center">
              <h3 className="font-headline text-2xl font-bold text-wiePurple mb-4">Host an Event?</h3>
              <p className="text-muted-foreground mb-6">Have a great idea for a technical session or networking mixer? Let us know!</p>
              <Link href="/feedback">
                <Button variant="outline" className="border-wiePurple text-wiePurple hover:bg-wiePurple/10">
                  Suggest Idea
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold text-wiePurple">Why Join IEEE WIE?</h2>
            <div className="w-20 h-1 bg-ieeeBlue mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-wiePurple/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wiePurple transition-colors duration-300">
                <Star className="w-8 h-8 text-wiePurple group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Recognition</h3>
              <p className="text-muted-foreground">Gain global recognition for your professional achievements through awards and scholarships.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-wiePurple/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wiePurple transition-colors duration-300">
                <Globe className="w-8 h-8 text-wiePurple group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-muted-foreground">Connect with over 30,000 members in over 100 countries and build lasting professional relationships.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-wiePurple/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wiePurple transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-wiePurple group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advocacy</h3>
              <p className="text-muted-foreground">Be part of the voice that advocates for women in leadership and decision-making roles in STEM.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


"use client";

import { EventCard } from '@/components/ui/event-card';
import { Calendar, Loader2 } from 'lucide-react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

export default function EventsPage() {
  const firestore = useFirestore();

  const eventsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'events'), orderBy('date', 'asc'));
  }, [firestore]);

  const { data: events, isLoading } = useCollection(eventsQuery);

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(255,77,77,0.3)]">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl font-black text-white mb-6">
            Upcoming <span className="text-primary italic">Events</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Join us for inspiring workshops, technical seminars, and networking sessions designed to elevate your career in STEM.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : events && events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard 
                key={event.id} 
                id={event.id}
                title={event.title}
                date={event.date}
                location={event.description.substring(0, 30) + "..."} // Using description for location placeholder if field missing
                image={event.imageUrls?.[0]}
                category={event.category}
                registrationLink={event.registrationLink}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No upcoming events at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

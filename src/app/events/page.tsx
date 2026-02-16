
import { EventCard } from '@/components/ui/event-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar } from 'lucide-react';

export default function EventsPage() {
  const events = [
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
    },
    {
      id: '3',
      title: 'Robotics Workshop',
      date: 'Feb 05, 2025',
      location: 'Innovation Lab',
      image: PlaceHolderImages.find(img => img.id === 'event-workshop')?.imageUrl,
      category: 'Workshop',
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}

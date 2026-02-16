
import { GalleryGrid } from '@/components/ui/gallery-grid';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen } from 'lucide-react';

export default function EventArchivePage() {
  const pastEvents = [
    {
      id: 'p1',
      title: 'Robotics Seminar 2024',
      image: PlaceHolderImages.find(img => img.id === 'past-event-1')?.imageUrl || 'https://picsum.photos/seed/wie-archive-1/800/600',
      category: 'Workshops',
    },
    {
      id: 'p2',
      title: 'Leadership Summit',
      image: PlaceHolderImages.find(img => img.id === 'past-event-2')?.imageUrl || 'https://picsum.photos/seed/wie-archive-2/800/600',
      category: 'Socials',
    },
    {
      id: 'p3',
      title: 'Annual Coding Bootcamp',
      image: PlaceHolderImages.find(img => img.id === 'past-event-3')?.imageUrl || 'https://picsum.photos/seed/wie-archive-3/800/600',
      category: 'Seminars',
    },
    {
      id: 'p4',
      title: 'Networking Mixer',
      image: PlaceHolderImages.find(img => img.id === 'event-networking')?.imageUrl || 'https://picsum.photos/seed/wie-archive-4/800/600',
      category: 'Socials',
    },
    {
      id: 'p5',
      title: 'Cybersecurity Intensive',
      image: PlaceHolderImages.find(img => img.id === 'event-workshop')?.imageUrl || 'https://picsum.photos/seed/wie-archive-5/800/600',
      category: 'Workshops',
    },
  ];

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(255,77,77,0.1)]">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Past Event <span className="text-primary italic">Archive</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-body leading-relaxed">
            A celebration of our journey. Explore the workshops, seminars, and socials that have shaped our community.
          </p>
        </div>

        <GalleryGrid items={pastEvents} />
      </div>
    </div>
  );
}

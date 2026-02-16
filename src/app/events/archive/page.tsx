
import { GalleryGrid } from '@/components/ui/gallery-grid';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function EventArchivePage() {
  const pastEvents = [
    {
      id: 'p1',
      title: 'Robotics Seminar 2024',
      image: PlaceHolderImages.find(img => img.id === 'past-event-1')?.imageUrl || '',
      category: 'Workshops',
    },
    {
      id: 'p2',
      title: 'Leadership Summit',
      image: PlaceHolderImages.find(img => img.id === 'past-event-2')?.imageUrl || '',
      category: 'Socials',
    },
    {
      id: 'p3',
      title: 'Annual Coding Bootcamp',
      image: PlaceHolderImages.find(img => img.id === 'past-event-3')?.imageUrl || '',
      category: 'Seminars',
    },
    {
      id: 'p4',
      title: 'Networking Mixer',
      image: PlaceHolderImages.find(img => img.id === 'event-networking')?.imageUrl || '',
      category: 'Socials',
    },
    {
      id: 'p5',
      title: 'Cybersecurity Intensive',
      image: PlaceHolderImages.find(img => img.id === 'event-workshop')?.imageUrl || '',
      category: 'Workshops',
    },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-wiePurple mb-6">Past Event Archive</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            A celebration of our journey. Explore the workshops, seminars, and socials that have shaped our community.
          </p>
        </div>

        <GalleryGrid items={pastEvents} />
      </div>
    </div>
  );
}

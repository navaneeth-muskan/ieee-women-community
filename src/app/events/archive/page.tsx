
"use client";

import { GalleryGrid } from '@/components/ui/gallery-grid';
import { BookOpen, Loader2 } from 'lucide-react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';

export default function EventArchivePage() {
  const firestore = useFirestore();

  const archiveQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'archivedEvents'), orderBy('date', 'desc'));
  }, [firestore]);

  const { data: archivedEvents, isLoading } = useCollection(archiveQuery);

  const galleryItems = archivedEvents?.map(event => ({
    id: event.id,
    title: event.title,
    image: event.imageUrls?.[0] || 'https://picsum.photos/seed/' + event.id + '/800/600',
    category: event.category,
  })) || [];

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="mb-10 flex justify-center">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,77,77,0.1)]">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Past Event <span className="text-primary italic">Archive</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-body leading-relaxed">
            A celebration of our journey. Explore the workshops, seminars, and socials that have shaped our community.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : galleryItems.length > 0 ? (
          <GalleryGrid items={galleryItems} />
        ) : (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">Our history is still being written.</p>
          </div>
        )}
      </div>
    </div>
  );
}

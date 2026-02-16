
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-wiePurple text-white shadow-md' 
                : 'bg-white text-muted-foreground hover:bg-wiePurple/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl overflow-hidden group shadow-md"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full object-cover rounded-xl"
                data-ai-hint="event photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Badge className="w-fit mb-2 bg-wiePurple border-none">{item.category}</Badge>
                <h4 className="text-white font-headline font-bold text-lg">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

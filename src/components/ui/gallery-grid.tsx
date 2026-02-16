
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

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
    <div className="space-y-16">
      {/* Filter Bar Container */}
      <div className="flex justify-center">
        <div className="bg-secondary/30 backdrop-blur-xl border border-white/5 p-2 rounded-[2rem] inline-flex gap-2 items-center shadow-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300",
                filter === cat 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                  : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 gap-8 space-y-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-[2.5rem] overflow-hidden group border border-white/5 bg-secondary/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  data-ai-hint="event photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col justify-end">
                <Badge className="w-fit mb-4 bg-primary text-white border-none shadow-lg shadow-primary/20 uppercase tracking-widest text-[10px] font-black px-4 py-1.5">
                  {item.category}
                </Badge>
                <h4 className="text-white font-headline font-black text-2xl tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

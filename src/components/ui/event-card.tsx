import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  image?: string;
  category: string;
  isArchived?: boolean;
}

export function EventCard({ id, title, date, location, image, category, isArchived }: EventCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 bg-secondary/20 border-white/5 rounded-[2.5rem]">
      <div className="relative h-56 overflow-hidden">
        {image && (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
            data-ai-hint="event engineering"
          />
        )}
        <div className="absolute top-6 left-6">
          <Badge className={isArchived ? "bg-white/10 text-white/50 backdrop-blur-md" : "bg-primary text-white shadow-xl shadow-primary/30"}>
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader className="px-8 pt-8 pb-4">
        <h3 className="font-headline font-black text-2xl line-clamp-1 text-white group-hover:text-primary transition-colors">{title}</h3>
      </CardHeader>
      <CardContent className="px-8 pb-6 space-y-4">
        <div className="flex items-center text-sm text-white/60 gap-3">
          <Calendar className="w-4 h-4 text-primary" />
          {date}
        </div>
        <div className="flex items-center text-sm text-white/60 gap-3">
          <MapPin className="w-4 h-4 text-primary" />
          {location}
        </div>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0">
        <Link href={`/events/${id}`} className="w-full">
          <Button variant={isArchived ? "outline" : "default"} className={isArchived ? "w-full border-white/10 text-white/60" : "w-full bg-white/5 hover:bg-primary hover:text-white border-white/5 font-bold rounded-2xl h-14"}>
            {isArchived ? 'View Summary' : 'Register Now'}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
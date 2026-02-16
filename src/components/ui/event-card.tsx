
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
  image: string;
  category: string;
  isArchived?: boolean;
}

export function EventCard({ id, title, date, location, image, category, isArchived }: EventCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border">
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          data-ai-hint="event engineering"
        />
        <div className="absolute top-4 left-4">
          <Badge className={isArchived ? "bg-muted text-muted-foreground" : "bg-wiePurple"}>
            {category}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-5">
        <h3 className="font-headline font-bold text-xl line-clamp-1 text-wiePurple">{title}</h3>
      </CardHeader>
      <CardContent className="px-5 pb-5 space-y-3">
        <div className="flex items-center text-sm text-muted-foreground gap-2">
          <Calendar className="w-4 h-4 text-ieeeBlue" />
          {date}
        </div>
        <div className="flex items-center text-sm text-muted-foreground gap-2">
          <MapPin className="w-4 h-4 text-ieeeBlue" />
          {location}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link href={`/events/${id}`} className="w-full">
          <Button variant={isArchived ? "outline" : "default"} className="w-full group">
            {isArchived ? 'View Summary' : 'Register Now'}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

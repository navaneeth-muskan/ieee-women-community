
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BookOpen, Award, Users, Laptop, Zap, Heart } from 'lucide-react';
import Link from 'next/link';

export default function MembershipPage() {
  const benefits = [
    {
      title: "Networking",
      description: "Access to a global network of IEEE members and professional colleagues.",
      icon: Users
    },
    {
      title: "Publications",
      description: "Subscriptions to award-winning publications including IEEE WIE Magazine.",
      icon: BookOpen
    },
    {
      title: "Discounts",
      description: "Substantial registration discounts for major conferences and workshops.",
      icon: Zap
    },
    {
      title: "Recognition",
      description: "Eligibility for awards, scholarships, and fellowships exclusively for WIE.",
      icon: Award
    },
    {
      title: "Technical Skills",
      description: "Exclusive access to technical webinars and online training materials.",
      icon: Laptop
    },
    {
      title: "Community",
      description: "Mentorship opportunities with industry leaders and senior academics.",
      icon: Heart
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Advocacy Hero */}
        <div className="bg-wiePurple rounded-[2rem] p-12 md:p-20 text-white relative overflow-hidden mb-20 shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <Badge className="bg-white text-wiePurple mb-6">IEEE Membership</Badge>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6 italic">Invest in Your Future</h1>
            <p className="text-lg opacity-90 mb-10 leading-relaxed">
              Becoming an IEEE WIE member means joining the world's largest professional organization 
              dedicated to advancing technology for the benefit of humanity.
            </p>
            <Link href="https://www.ieee.org/membership/join">
              <Button size="lg" className="bg-ieeeBlue text-white hover:bg-ieeeBlue/90 shadow-lg px-10">
                Join IEEE WIE Now
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-ieeeBlue/10 skew-x-12 transform translate-x-20"></div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="font-headline text-3xl font-bold text-wiePurple text-center mb-12">Exclusive Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-wiePurple/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-wiePurple" />
                  </div>
                  <CardTitle className="font-headline text-xl text-wiePurple">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ/CTA */}
        <div className="text-center bg-white p-12 rounded-[2rem] shadow-sm border border-border">
          <h2 className="font-headline text-3xl font-bold text-wiePurple mb-6 italic">Ready to make an impact?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            WIE membership is free for Student and Graduate Student members who already have an IEEE membership!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-wiePurple hover:bg-wiePurple/90">Official WIE Benefits</Button>
            <Button variant="outline">Learn about IEEE Chapters</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

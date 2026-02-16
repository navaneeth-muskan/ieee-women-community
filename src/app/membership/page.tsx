
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
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Advocacy Hero */}
        <div className="bg-primary/10 border border-primary/20 rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden mb-20 shadow-2xl backdrop-blur-sm">
          <div className="relative z-10 max-w-2xl">
            <Badge className="bg-primary text-white mb-6 font-bold px-4 py-1">IEEE Membership</Badge>
            <h1 className="font-headline text-4xl md:text-6xl font-black mb-6 italic tracking-tight">Invest in Your Future</h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed font-body">
              Becoming an IEEE WIE member means joining the world's largest professional organization 
              dedicated to advancing technology for the benefit of humanity.
            </p>
            <Link href="https://www.ieee.org/membership/join">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 px-10 h-14 font-bold rounded-xl text-lg transition-all hover:scale-105">
                Join IEEE WIE Now
              </Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform translate-x-20"></div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white text-center mb-16 tracking-tight">
            Exclusive <span className="text-primary italic">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="bg-secondary/20 border-white/5 rounded-[2rem] shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-white font-bold tracking-tight">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/50 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ/CTA */}
        <div className="text-center bg-secondary/10 p-12 md:p-20 rounded-[3rem] shadow-sm border border-white/5 backdrop-blur-sm">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-6 italic tracking-tight">Ready to make an impact?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            WIE membership is free for Student and Graduate Student members who already have an IEEE membership!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-primary hover:bg-primary/90 h-14 px-8 rounded-xl font-bold text-lg shadow-xl shadow-primary/20">Official WIE Benefits</Button>
            <Button variant="outline" className="h-14 px-8 rounded-xl border-white/10 text-white font-bold text-lg hover:bg-white/5">Learn about Chapters</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

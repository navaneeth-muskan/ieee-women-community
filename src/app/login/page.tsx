
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md bg-secondary/20 rounded-[2.5rem] shadow-2xl border border-white/5 p-8 md:p-12 backdrop-blur-md">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
            <Sparkles className="text-white w-8 h-8" />
          </div>
          <h1 className="font-headline text-3xl font-bold text-white mb-2 italic tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground">Admin & Member Portal</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/70">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@ieee.org" 
              className="bg-black/20 border-white/10 text-white rounded-xl h-12" 
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password" className="text-white/70">Password</Label>
              <Link href="#" className="text-sm text-primary hover:underline font-bold">Forgot?</Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              className="bg-black/20 border-white/10 text-white rounded-xl h-12" 
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 h-14 text-lg rounded-xl font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
            Log In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/recruitment" className="text-primary font-bold hover:underline">Apply to Join</Link>
        </div>
      </div>
    </div>
  );
}


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-wiePurple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-wiePurple/20">
            <span className="text-white font-headline font-bold text-3xl">W</span>
          </div>
          <h1 className="font-headline text-3xl font-bold text-wiePurple mb-2 italic">Welcome Back</h1>
          <p className="text-muted-foreground">Admin & Member Portal</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="name@ieee.org" className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-sm text-wiePurple hover:underline">Forgot password?</Link>
            </div>
            <Input id="password" type="password" className="rounded-xl" />
          </div>
          <Button className="w-full bg-wiePurple hover:bg-wiePurple/90 py-6 text-lg rounded-xl">
            Log In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/recruitment" className="text-wiePurple font-bold hover:underline">Apply to Join</Link>
        </div>
      </div>
    </div>
  );
}

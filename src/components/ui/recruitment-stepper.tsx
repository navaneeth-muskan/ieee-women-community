
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { automatedFormCompletion } from '@/ai/flows/automated-form-completion-flow';

const ROLES = [
  { id: 'core', name: 'Core Team', description: 'Decision makers and strategists.' },
  { id: 'associate', name: 'Associate', description: 'Execution and management support.' },
  { id: 'coordinator', name: 'Coordinator', description: 'Logistics and operational lead.' }
];

export function RecruitmentStepper() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    motivation: '',
    skills: '',
  });

  const handleAIPreFill = async () => {
    setLoading(true);
    try {
      const mockMemberInfo = JSON.stringify({
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        pastRoles: ["Associate"],
        skills: ["Project Management", "React", "Public Speaking"],
        bio: "Dedicated IEEE member with a passion for community building and STEM outreach."
      });

      const schemaDescription = JSON.stringify({
        firstName: "string",
        lastName: "string",
        email: "string",
        role: "Core | Associate | Coordinator",
        motivation: "A 500 word essay about why you want to join",
        skills: "List of technical and soft skills"
      });

      const result = await automatedFormCompletion({
        memberInformation: mockMemberInfo,
        formSchemaDescription: schemaDescription
      });

      if (result.suggestedFormFields) {
        setFormData(prev => ({
          ...prev,
          ...result.suggestedFormFields
        }));
        toast({
          title: "AI Assisted Pre-fill Complete",
          description: "We've populated fields based on your profile. Please review.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "AI Help Unavailable",
        description: "We couldn't reach the AI assistant. Please fill in manually.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Our core team will review your application and get back to you.",
    });
    setStep(4);
  };

  if (step === 4) {
    return (
      <div className="text-center py-12 space-y-4">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
        <h3 className="text-2xl font-headline font-bold text-wiePurple">Thank You!</h3>
        <p className="text-muted-foreground">Your application is being processed. Check your email for next steps.</p>
        <Button onClick={() => window.location.href = '/'}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-border">
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
              step >= s ? 'bg-wiePurple text-white' : 'bg-muted text-muted-foreground'
            }`}>
              {s}
            </div>
            {s < 3 && <div className={`w-12 h-1 bg-muted mx-2 ${step > s ? 'bg-wiePurple' : ''}`} />}
          </div>
        ))}
      </div>

      <div className="mb-6 flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleAIPreFill}
          disabled={loading}
          className="text-wiePurple border-wiePurple hover:bg-wiePurple/10 gap-2"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          AI Pre-fill
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <h3 className="text-xl font-bold font-headline text-wiePurple">Personal Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input 
                  value={formData.firstName} 
                  onChange={e => setFormData({...formData, firstName: e.target.value})} 
                  placeholder="Jane"
                />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input 
                  value={formData.lastName} 
                  onChange={e => setFormData({...formData, lastName: e.target.value})} 
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input 
                type="email" 
                value={formData.email} 
                onChange={e => setFormData({...formData, email: e.target.value})} 
                placeholder="jane@example.com"
              />
            </div>
            <Button className="w-full bg-wiePurple" type="button" onClick={nextStep}>Next: Role Selection</Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-2">
            <h3 className="text-xl font-bold font-headline text-wiePurple">Choose Your Role</h3>
            <div className="space-y-3">
              {ROLES.map((r) => (
                <div 
                  key={r.id}
                  onClick={() => setFormData({...formData, role: r.id})}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.role === r.id ? 'border-wiePurple bg-wiePurple/5' : 'border-border hover:border-wiePurple/50'
                  }`}
                >
                  <div className="font-bold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.description}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1" type="button" onClick={prevStep}>Back</Button>
              <Button className="flex-1 bg-wiePurple" type="button" disabled={!formData.role} onClick={nextStep}>Next: Motivation</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-2">
            <h3 className="text-xl font-bold font-headline text-wiePurple">Experience & Motivation</h3>
            <div className="space-y-2">
              <Label>Why do you want to join WIE?</Label>
              <Textarea 
                value={formData.motivation} 
                onChange={e => setFormData({...formData, motivation: e.target.value})} 
                rows={4}
                placeholder="Share your passion..."
              />
            </div>
            <div className="space-y-2">
              <Label>Key Skills</Label>
              <Input 
                value={formData.skills} 
                onChange={e => setFormData({...formData, skills: e.target.value})} 
                placeholder="e.g. Graphic Design, Public Speaking, Python"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1" type="button" onClick={prevStep}>Back</Button>
              <Button className="flex-1 bg-wiePurple" type="submit">Submit Application</Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}


"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Star, MessageSquare, Send, Sparkles, Loader2 } from 'lucide-react';
import { automatedFormCompletion } from '@/ai/flows/automated-form-completion-flow';

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    comments: ''
  });

  const handleAIPreFill = async () => {
    setLoading(true);
    try {
      const mockMemberInfo = JSON.stringify({
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        recentEvents: ["Robotics Seminar 2024"]
      });

      const schemaDescription = JSON.stringify({
        name: "Full Name",
        email: "Email address",
        event: "Which event did you attend?"
      });

      const result = await automatedFormCompletion({
        memberInformation: mockMemberInfo,
        formSchemaDescription: schemaDescription
      });

      if (result.suggestedFormFields) {
        setFormData(prev => ({
          ...prev,
          name: result.suggestedFormFields.name || `${JSON.parse(mockMemberInfo).firstName} ${JSON.parse(mockMemberInfo).lastName}`,
          email: result.suggestedFormFields.email || JSON.parse(mockMemberInfo).email,
          event: result.suggestedFormFields.event || JSON.parse(mockMemberInfo).recentEvents[0]
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Received",
      description: "Thank you for helping us improve our chapter!",
    });
    setFormData({ name: '', email: '', event: '', comments: '' });
    setRating(0);
  };

  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-5 border border-border">
          <div className="md:col-span-2 bg-wiePurple p-12 text-white flex flex-col justify-between">
            <div>
              <MessageSquare className="w-12 h-12 mb-6 opacity-50" />
              <h1 className="font-headline text-3xl font-bold mb-4 italic">Your Voice Matters</h1>
              <p className="opacity-80 leading-relaxed font-body">
                Help us tailor our events to your needs. Every piece of feedback helps us build 
                a stronger community.
              </p>
            </div>
            <div className="mt-12">
              <div className="text-sm font-bold uppercase tracking-widest opacity-50 mb-4">Recent Events</div>
              <ul className="space-y-2 opacity-80 text-sm">
                <li>• Women in AI Summit</li>
                <li>• Tech Leadership Panel</li>
                <li>• Robotics Seminar 2024</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3 p-12">
            <div className="flex justify-end mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleAIPreFill}
                className="text-wiePurple hover:bg-wiePurple/5 gap-2"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                Fill with Profile
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    placeholder="jane@ieee.org"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Event Attended</Label>
                <Input 
                  value={formData.event} 
                  onChange={e => setFormData({...formData, event: e.target.value})} 
                  placeholder="e.g. Women in AI Summit"
                />
              </div>

              <div className="space-y-4">
                <Label>Overall Experience</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-8 h-8 cursor-pointer transition-colors ${
                        rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Comments</Label>
                <Textarea 
                  value={formData.comments} 
                  onChange={e => setFormData({...formData, comments: e.target.value})} 
                  placeholder="What did you love? What can we improve?"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-wiePurple hover:bg-wiePurple/90 group py-6 text-lg font-bold">
                Submit Feedback
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


import { RecruitmentStepper } from '@/components/ui/recruitment-stepper';

export default function RecruitmentPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our <span className="text-primary italic">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            We are looking for passionate individuals to help us lead initiatives that empower women in engineering. 
            Select a role that fits your commitment level and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold font-headline text-primary mb-4">Core Team Eligibility</h2>
              <ul className="space-y-3 list-disc list-inside text-white/70">
                <li>IEEE Student Member in good standing.</li>
                <li>Proven track record in leadership or event management.</li>
                <li>Commitment of 5-8 hours per week.</li>
                <li>Passionate about diversity and inclusion in STEM.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-headline text-primary mb-4">Associate Roles</h2>
              <p className="text-white/70 mb-4">
                Perfect for members who want to contribute to specific projects like social media, graphic design, 
                or technical workshops without a heavy administrative load.
              </p>
              <ul className="space-y-3 list-disc list-inside text-white/70">
                <li>Open to all registered WIE members.</li>
                <li>Commitment of 2-4 hours per week.</li>
                <li>Mentorship from Core team leads.</li>
              </ul>
            </div>

            <div className="bg-secondary/30 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm">
              <h3 className="font-bold text-primary mb-2 italic">Important Note</h3>
              <p className="text-sm text-white/60">
                Recruitment happens twice a year. If you miss the deadline, you can still participate as a 
                Volunteer Coordinator for our flagship events.
              </p>
            </div>
          </div>

          <div>
            <RecruitmentStepper />
          </div>
        </div>
      </div>
    </div>
  );
}

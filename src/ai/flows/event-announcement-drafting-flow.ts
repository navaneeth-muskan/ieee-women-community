'use server';
/**
 * @fileOverview This file implements a Genkit flow for drafting event announcements and social media posts.
 *
 * - draftEventAnnouncement - A function that generates draft event announcements and social media posts.
 * - DraftEventAnnouncementInput - The input type for the draftEventAnnouncement function.
 * - DraftEventAnnouncementOutput - The return type for the draftEventAnnouncement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DraftEventAnnouncementInputSchema = z.object({
  title: z.string().describe('The title of the event.'),
  date: z
    .string()
    .describe('The date and time of the event (e.g., "October 26, 2024, 2:00 PM PST").'),
  description: z
    .string()
    .describe('A detailed description of the event, including purpose, activities, and target audience.'),
  additionalInfo: z
    .string()
    .optional()
    .describe('Any additional information or special instructions for the event.'),
});
export type DraftEventAnnouncementInput = z.infer<
  typeof DraftEventAnnouncementInputSchema
>;

const DraftEventAnnouncementOutputSchema = z.object({
  announcement: z
    .string()
    .describe('A draft for a detailed event announcement suitable for email or a webpage.'),
  socialMediaPost: z
    .string()
    .describe('A concise draft for a social media post (e.g., Twitter, Instagram caption).'),
  hashtags: z.array(z.string()).describe('A list of relevant hashtags for the event.'),
});
export type DraftEventAnnouncementOutput = z.infer<
  typeof DraftEventAnnouncementOutputSchema
>;

export async function draftEventAnnouncement(
  input: DraftEventAnnouncementInput
): Promise<DraftEventAnnouncementOutput> {
  return draftEventAnnouncementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'eventAnnouncementDraftingPrompt',
  input: {schema: DraftEventAnnouncementInputSchema},
  output: {schema: DraftEventAnnouncementOutputSchema},
  prompt: `You are an AI assistant specialized in drafting engaging event announcements and social media posts for IEEE Women in Engineering (WIE) chapters.

Based on the provided event details, generate a compelling event announcement and a concise social media post.
Also, suggest a list of relevant hashtags.

Ensure the tone is professional, empowering, and encourages participation.

Event Title: {{{title}}}
Event Date/Time: {{{date}}}
Event Description: {{{description}}}
{{#if additionalInfo}}Additional Information: {{{additionalInfo}}}{{/if}}

Your output should be in JSON format, strictly adhering to the following structure:
{
  "announcement": "[Your detailed event announcement here]",
  "socialMediaPost": "[Your concise social media post here]",
  "hashtags": ["#Hashtag1", "#Hashtag2", ...]
}`,
});

const draftEventAnnouncementFlow = ai.defineFlow(
  {
    name: 'draftEventAnnouncementFlow',
    inputSchema: DraftEventAnnouncementInputSchema,
    outputSchema: DraftEventAnnouncementOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);

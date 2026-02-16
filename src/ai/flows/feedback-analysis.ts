'use server';
/**
 * @fileOverview This file provides a Genkit flow for analyzing event feedback comments.
 *
 * - analyzeFeedback - A function that analyzes event feedback comments to provide sentiment and key themes.
 * - FeedbackAnalysisInput - The input type for the analyzeFeedback function.
 * - FeedbackAnalysisOutput - The return type for the analyzeFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FeedbackAnalysisInputSchema = z.object({
  feedbackComments: z.array(z.string()).describe('An array of feedback comments from an event.'),
});
export type FeedbackAnalysisInput = z.infer<typeof FeedbackAnalysisInputSchema>;

const FeedbackAnalysisOutputSchema = z.object({
  overallSentiment: z.string().describe('The overall sentiment expressed in the feedback comments (e.g., positive, negative, neutral, mixed).'),
  keyThemes: z.array(z.string()).describe('A list of key themes or recurring topics identified in the feedback.'),
  summary: z.string().describe('A concise summary of the feedback, highlighting main points and areas for improvement.'),
});
export type FeedbackAnalysisOutput = z.infer<typeof FeedbackAnalysisOutputSchema>;

export async function analyzeFeedback(input: FeedbackAnalysisInput): Promise<FeedbackAnalysisOutput> {
  return feedbackAnalysisFlow(input);
}

const feedbackAnalysisPrompt = ai.definePrompt({
  name: 'feedbackAnalysisPrompt',
  input: { schema: FeedbackAnalysisInputSchema },
  output: { schema: FeedbackAnalysisOutputSchema },
  prompt: `You are an AI assistant specialized in analyzing event feedback. Your task is to review the provided feedback comments from an event, determine the overall sentiment, identify key themes, and provide a concise summary.

Here are the feedback comments:
{{#each feedbackComments}}
- {{{this}}}
{{/each}}`,
});

const feedbackAnalysisFlow = ai.defineFlow(
  {
    name: 'feedbackAnalysisFlow',
    inputSchema: FeedbackAnalysisInputSchema,
    outputSchema: FeedbackAnalysisOutputSchema,
  },
  async (input) => {
    const {output} = await feedbackAnalysisPrompt(input);
    if (!output) {
      throw new Error('Failed to get feedback analysis from the model.');
    }
    return output;
  }
);

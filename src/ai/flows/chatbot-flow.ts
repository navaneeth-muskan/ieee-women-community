'use server';
/**
 * @fileOverview A chatbot flow for the IEEE WIE Digital Hub.
 *
 * - chatbot - A function that handles the chat process.
 * - ChatbotInput - The input type for the chatbot function.
 * - ChatbotOutput - The return type for the chatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
  message: z.string().describe('The new message from the user.'),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  response: z.string().describe('The AI response message.'),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function chatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  prompt: `You are the helpful AI assistant for the IEEE Women in Engineering (WIE) Digital Hub. 

Your goal is to help users navigate the site, learn about upcoming events, recruitment, and membership benefits. 
You should be encouraging, professional, and knowledgeable about IEEE WIE's mission to empower women in STEM.

Context about the Hub:
- Events Page: Lists upcoming workshops and seminars.
- Recruitment Page: Information on joining the Core team or Associate roles.
- Membership Page: Details the benefits of being an IEEE WIE member.
- Archive Page: Gallery of past successes.
- Feedback Page: Where users can suggest ideas or give feedback.

Tone: Professional, empowering, and friendly.

Conversation History:
{{#each history}}
{{role}}: {{{content}}}
{{/each}}

User: {{{message}}}`,
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate a response.');
    }
    return output;
  }
);


'use server';
/**
 * @fileOverview This file implements a Genkit flow for automated form completion.
 * It helps pre-fill recruitment or feedback forms based on existing member information.
 *
 * - automatedFormCompletion - A function that triggers the form completion process.
 * - AutomatedFormCompletionInput - The input type for the automatedFormCompletion function.
 * - AutomatedFormCompletionOutput - The return type for the automatedFormCompletion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedFormCompletionInputSchema = z.object({
  formSchemaDescription: z
    .string()
    .describe(
      'A JSON string representing the schema or structure of the form to be filled. Example: {"name": "string", "email": "string", "rolePreference": ["Core", "Associate", "Coordinator"], "feedbackComments": "string"}'
    ),
  memberInformation: z
    .string()
    .describe(
      'A JSON string containing the existing member profile information. Example: {"firstName": "Jane", "lastName": "Doe", "email": "jane.doe@example.com", "pastRoles": ["Associate"], "skills": ["Leadership", "Mentoring"]}'
    ),
});
export type AutomatedFormCompletionInput = z.infer<
  typeof AutomatedFormCompletionInputSchema
>;

const AutomatedFormCompletionOutputSchema = z.object({
  suggestedFormFields: z
    .record(z.string(), z.any())
    .describe(
      'A JSON object where keys are form field names from the provided schema and values are the suggested pre-fill values based on member information.'
    ),
});
export type AutomatedFormCompletionOutput = z.infer<
  typeof AutomatedFormCompletionOutputSchema
>;

export async function automatedFormCompletion(
  input: AutomatedFormCompletionInput
): Promise<AutomatedFormCompletionOutput> {
  return automatedFormCompletionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automatedFormCompletionPrompt',
  input: {schema: AutomatedFormCompletionInputSchema},
  output: {schema: AutomatedFormCompletionOutputSchema},
  prompt: 'You are an AI assistant tasked with automatically pre-filling form fields based on provided member information. ' +
    'Your goal is to suggest values for the form fields that best match the member\'s profile.\n\n' +
    'Form Schema Description:\n' +
    '```json\n' +
    '{{{formSchemaDescription}}}\n' +
    '```\n\n' +
    'Existing Member Information:\n' +
    '```json\n' +
    '{{{memberInformation}}}\n' +
    '```\n\n' +
    'Based on the Form Schema Description and Existing Member Information, provide the best suggestions for the form fields. ' +
    'Ensure the output is a JSON object matching the `suggestedFormFields` structure, where keys are field names and values are the suggested content. ' +
    'If a field cannot be directly inferred, leave its value as an empty string or null, or the most reasonable default. ' +
    'Consider the data types and options specified in the Form Schema Description when generating suggestions.',
});

const automatedFormCompletionFlow = ai.defineFlow(
  {
    name: 'automatedFormCompletionFlow',
    inputSchema: AutomatedFormCompletionInputSchema,
    outputSchema: AutomatedFormCompletionOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);

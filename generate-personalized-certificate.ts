
'use server';
/**
 * This file is not used in the application anymore.
 * The certificate generation functionality has been removed.
 */
import {z} from 'genkit';

export type GeneratePersonalizedCertificateInput = z.infer<typeof GeneratePersonalizedCertificateInputSchema>;
const GeneratePersonalizedCertificateInputSchema = z.object({
  userName: z.string().describe('The name of the user to personalize the certificate for.'),
});

export type GeneratePersonalizedCertificateOutput = z.infer<typeof GeneratePersonalizedCertificateOutputSchema>;
const GeneratePersonalizedCertificateOutputSchema = z.object({
  certificateDataUri: z
    .string()
    .describe(
      'A data URI containing the personalized certificate as a PNG image, Base64 encoded.'
    ),
});

export async function generatePersonalizedCertificate(
  input: GeneratePersonalizedCertificateInput
): Promise<GeneratePersonalizedCertificateOutput> {
  // This function is no longer active.
  // Returning a placeholder or throwing an error are options.
  // For now, we'll throw an error to indicate it's been removed.
  throw new Error("Certificate generation has been removed.");
}

// The rest of the flow related to certificate generation is no longer needed.

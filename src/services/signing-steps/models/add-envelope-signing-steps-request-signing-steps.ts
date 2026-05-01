import { z } from 'zod';
import {
  SigningStepsRecipients1,
  signingStepsRecipients1,
  signingStepsRecipients1Request,
  signingStepsRecipients1Response,
} from './signing-steps-recipients-1';

/**
 * Zod schema for the AddEnvelopeSigningStepsRequestSigningSteps model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeSigningStepsRequestSigningSteps = z.lazy(() => {
  return z.object({
    recipients: z.array(signingStepsRecipients1).optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeSigningStepsRequestSigningSteps} addEnvelopeSigningStepsRequestSigningSteps
 * @property {SigningStepsRecipients1[]}
 */
export type AddEnvelopeSigningStepsRequestSigningSteps = z.infer<
  typeof addEnvelopeSigningStepsRequestSigningSteps
>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeSigningStepsRequestSigningSteps application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeSigningStepsRequestSigningStepsResponse = z.lazy(() => {
  return z
    .object({
      recipients: z.array(signingStepsRecipients1Response).optional().nullable(),
    })
    .transform((data) => ({
      recipients: data['recipients'],
    }));
});

/**
 * Zod schema for mapping the AddEnvelopeSigningStepsRequestSigningSteps application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeSigningStepsRequestSigningStepsRequest = z.lazy(() => {
  return z
    .object({
      recipients: z.array(signingStepsRecipients1Request).optional().nullable(),
    })
    .transform((data) => ({
      recipients: data['recipients'],
    }));
});

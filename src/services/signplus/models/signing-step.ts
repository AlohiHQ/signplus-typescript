import { z } from 'zod';
import { Recipient, recipient, recipientRequest, recipientResponse } from './recipient';

/**
 * The shape of the model inside the application code - what the users use
 */
export const signingStep = z.lazy(() => {
  return z.object({
    recipients: z.array(recipient).optional(),
  });
});

/**
 *
 * @typedef  {SigningStep} signingStep
 * @property {Recipient[]} - List of recipients
 */
export type SigningStep = z.infer<typeof signingStep>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const signingStepResponse = z.lazy(() => {
  return z
    .object({
      recipients: z.array(recipientResponse).optional(),
    })
    .transform((data) => ({
      recipients: data['recipients'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const signingStepRequest = z.lazy(() => {
  return z
    .object({
      recipients: z.array(recipientRequest).optional(),
    })
    .transform((data) => ({
      recipients: data['recipients'],
    }));
});

import { z } from 'zod';
import { Recipient, recipient, recipientRequest, recipientResponse } from './recipient';

/**
 * Zod schema for the SigningStep model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the SigningStep application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the SigningStep application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

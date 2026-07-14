import { z } from 'zod';
import { SigningStep, signingStep, signingStepRequest, signingStepResponse } from './signing-step';

/**
 * Zod schema for the AddEnvelopeSigningStepsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeSigningStepsRequest = z.lazy(() => {
  return z.object({
    signingSteps: z.array(signingStep).optional(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeSigningStepsRequest} addEnvelopeSigningStepsRequest
 * @property {SigningStep[]} - List of signing steps
 */
export type AddEnvelopeSigningStepsRequest = z.infer<typeof addEnvelopeSigningStepsRequest>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeSigningStepsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeSigningStepsRequestResponse = z.lazy(() => {
  return z
    .object({
      signing_steps: z.array(signingStepResponse).optional(),
    })
    .transform((data) => ({
      signingSteps: data['signing_steps'],
    }));
});

/**
 * Zod schema for mapping the AddEnvelopeSigningStepsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeSigningStepsRequestRequest = z.lazy(() => {
  return z
    .object({
      signingSteps: z.array(signingStepRequest).optional(),
    })
    .transform((data) => ({
      signing_steps: data['signingSteps'],
    }));
});

import { z } from 'zod';
import { SigningStep, signingStep, signingStepRequest, signingStepResponse } from './signing-step';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

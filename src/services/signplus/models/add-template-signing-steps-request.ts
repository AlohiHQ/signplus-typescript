import { z } from 'zod';
import { templateSigningStep, templateSigningStepRequest, templateSigningStepResponse } from './template-signing-step';

/**
 * The shape of the model inside the application code - what the users use
 */
export const addTemplateSigningStepsRequest = z.lazy(() => {
  return z.object({
    signingSteps: z.array(templateSigningStep),
  });
});

/**
 *
 * @typedef  {AddTemplateSigningStepsRequest} addTemplateSigningStepsRequest
 * @property {TemplateSigningStep[]} - List of signing steps
 */
export type AddTemplateSigningStepsRequest = z.infer<typeof addTemplateSigningStepsRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addTemplateSigningStepsRequestResponse = z.lazy(() => {
  return z
    .object({
      signing_steps: z.array(templateSigningStepResponse),
    })
    .transform((data) => ({
      signingSteps: data['signing_steps'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addTemplateSigningStepsRequestRequest = z.lazy(() => {
  return z.object({ signingSteps: z.array(templateSigningStepRequest).nullish() }).transform((data) => ({
    signing_steps: data['signingSteps'],
  }));
});

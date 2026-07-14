import { z } from 'zod';
import {
  TemplateSigningStep,
  templateSigningStep,
  templateSigningStepRequest,
  templateSigningStepResponse,
} from './template-signing-step';

/**
 * Zod schema for the AddTemplateSigningStepsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the AddTemplateSigningStepsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the AddTemplateSigningStepsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateSigningStepsRequestRequest = z.lazy(() => {
  return z
    .object({
      signingSteps: z.array(templateSigningStepRequest),
    })
    .transform((data) => ({
      signing_steps: data['signingSteps'],
    }));
});

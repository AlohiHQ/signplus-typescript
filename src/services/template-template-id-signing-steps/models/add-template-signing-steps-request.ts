import { z } from 'zod';
import {
  AddTemplateSigningStepsRequestSigningSteps,
  addTemplateSigningStepsRequestSigningSteps,
  addTemplateSigningStepsRequestSigningStepsRequest,
  addTemplateSigningStepsRequestSigningStepsResponse,
} from './add-template-signing-steps-request-signing-steps';

/**
 * Zod schema for the AddTemplateSigningStepsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateSigningStepsRequest = z.lazy(() => {
  return z.object({
    signingSteps: z.array(addTemplateSigningStepsRequestSigningSteps).optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddTemplateSigningStepsRequest} addTemplateSigningStepsRequest
 * @property {AddTemplateSigningStepsRequestSigningSteps[]}
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
      signing_steps: z
        .array(addTemplateSigningStepsRequestSigningStepsResponse)
        .optional()
        .nullable(),
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
      signingSteps: z
        .array(addTemplateSigningStepsRequestSigningStepsRequest)
        .optional()
        .nullable(),
    })
    .transform((data) => ({
      signing_steps: data['signingSteps'],
    }));
});

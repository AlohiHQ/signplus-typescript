import { z } from 'zod';
import {
  AddEnvelopeSigningStepsRequestSigningSteps,
  addEnvelopeSigningStepsRequestSigningSteps,
  addEnvelopeSigningStepsRequestSigningStepsRequest,
  addEnvelopeSigningStepsRequestSigningStepsResponse,
} from './add-envelope-signing-steps-request-signing-steps';

/**
 * Zod schema for the AddEnvelopeSigningStepsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeSigningStepsRequest = z.lazy(() => {
  return z.object({
    signingSteps: z.array(addEnvelopeSigningStepsRequestSigningSteps).optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeSigningStepsRequest} addEnvelopeSigningStepsRequest
 * @property {AddEnvelopeSigningStepsRequestSigningSteps[]}
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
      signing_steps: z
        .array(addEnvelopeSigningStepsRequestSigningStepsResponse)
        .optional()
        .nullable(),
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
      signingSteps: z
        .array(addEnvelopeSigningStepsRequestSigningStepsRequest)
        .optional()
        .nullable(),
    })
    .transform((data) => ({
      signing_steps: data['signingSteps'],
    }));
});

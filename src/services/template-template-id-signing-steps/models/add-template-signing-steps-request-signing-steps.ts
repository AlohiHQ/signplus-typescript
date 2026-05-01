import { z } from 'zod';
import {
  SigningStepsRecipients2,
  signingStepsRecipients2,
  signingStepsRecipients2Request,
  signingStepsRecipients2Response,
} from './signing-steps-recipients-2';

/**
 * Zod schema for the AddTemplateSigningStepsRequestSigningSteps model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateSigningStepsRequestSigningSteps = z.lazy(() => {
  return z.object({
    recipients: z.array(signingStepsRecipients2).optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddTemplateSigningStepsRequestSigningSteps} addTemplateSigningStepsRequestSigningSteps
 * @property {SigningStepsRecipients2[]}
 */
export type AddTemplateSigningStepsRequestSigningSteps = z.infer<
  typeof addTemplateSigningStepsRequestSigningSteps
>;

/**
 * Zod schema for mapping API responses to the AddTemplateSigningStepsRequestSigningSteps application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateSigningStepsRequestSigningStepsResponse = z.lazy(() => {
  return z
    .object({
      recipients: z.array(signingStepsRecipients2Response).optional().nullable(),
    })
    .transform((data) => ({
      recipients: data['recipients'],
    }));
});

/**
 * Zod schema for mapping the AddTemplateSigningStepsRequestSigningSteps application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateSigningStepsRequestSigningStepsRequest = z.lazy(() => {
  return z
    .object({
      recipients: z.array(signingStepsRecipients2Request).optional().nullable(),
    })
    .transform((data) => ({
      recipients: data['recipients'],
    }));
});

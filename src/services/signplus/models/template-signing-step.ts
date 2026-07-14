import { z } from 'zod';
import {
  TemplateRecipient,
  templateRecipient,
  templateRecipientRequest,
  templateRecipientResponse,
} from './template-recipient';

/**
 * Zod schema for the TemplateSigningStep model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const templateSigningStep = z.lazy(() => {
  return z.object({
    recipients: z.array(templateRecipient).optional(),
  });
});

/**
 *
 * @typedef  {TemplateSigningStep} templateSigningStep
 * @property {TemplateRecipient[]} - List of recipients
 */
export type TemplateSigningStep = z.infer<typeof templateSigningStep>;

/**
 * Zod schema for mapping API responses to the TemplateSigningStep application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const templateSigningStepResponse = z.lazy(() => {
  return z
    .object({
      recipients: z.array(templateRecipientResponse).optional(),
    })
    .transform((data) => ({
      recipients: data['recipients'],
    }));
});

/**
 * Zod schema for mapping the TemplateSigningStep application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const templateSigningStepRequest = z.lazy(() => {
  return z
    .object({
      recipients: z.array(templateRecipientRequest).optional(),
    })
    .transform((data) => ({
      recipients: data['recipients'],
    }));
});

import { z } from 'zod';
import { templateRecipient, templateRecipientRequest, templateRecipientResponse } from './template-recipient';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const templateSigningStepRequest = z.lazy(() => {
  return z.object({ recipients: z.array(templateRecipientRequest).nullish() }).transform((data) => ({
    recipients: data['recipients'],
  }));
});

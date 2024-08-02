import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const recipientVerification = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 *
 * @typedef  {RecipientVerification} recipientVerification
 * @property {RecipientVerificationType} - Type of signature verification (SMS sends a code via SMS, PASSCODE requires a code to be entered)
 * @property {string}
 */
export type RecipientVerification = z.infer<typeof recipientVerification>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const recipientVerificationResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      value: data['value'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const recipientVerificationRequest = z.lazy(() => {
  return z.object({ type: z.string().nullish(), value: z.string().nullish() }).transform((data) => ({
    type: data['type'],
    value: data['value'],
  }));
});

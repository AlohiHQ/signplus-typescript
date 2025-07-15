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
 * @property {RecipientVerificationType} - Type of verification the recipient must complete before accessing the envelope.

- `PASSCODE`: requires a code to be entered.  
- `SMS`: sends a code via SMS.  
- `ID_VERIFICATION`: prompts the recipient to complete an automated ID and selfie check.
 * @property {string} - Required for `PASSCODE` and `SMS` verification.

- `PASSCODE`: code required by the recipient to sign the document.
- `SMS`: recipient's phone number.
- `ID_VERIFICATION`: leave empty.
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

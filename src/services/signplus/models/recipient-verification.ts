import { z } from 'zod';

/**
 * Zod schema for the RecipientVerification model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the RecipientVerification application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the RecipientVerification application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

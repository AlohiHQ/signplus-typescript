import { z } from 'zod';

/**
 * Zod schema for the SetEnvelopeExpirationDateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeExpirationDateRequest = z.lazy(() => {
  return z.object({
    expiresAt: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeExpirationDateRequest} setEnvelopeExpirationDateRequest
 * @property {string}
 */
export type SetEnvelopeExpirationDateRequest = z.infer<typeof setEnvelopeExpirationDateRequest>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeExpirationDateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeExpirationDateRequestResponse = z.lazy(() => {
  return z
    .object({
      expires_at: z.string().optional().nullable(),
    })
    .transform((data) => ({
      expiresAt: data['expires_at'],
    }));
});

/**
 * Zod schema for mapping the SetEnvelopeExpirationDateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeExpirationDateRequestRequest = z.lazy(() => {
  return z
    .object({
      expiresAt: z.string().optional().nullable(),
    })
    .transform((data) => ({
      expires_at: data['expiresAt'],
    }));
});

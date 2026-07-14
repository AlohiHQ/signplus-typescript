import { z } from 'zod';

/**
 * Zod schema for the SetEnvelopeExpirationRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeExpirationRequest = z.lazy(() => {
  return z.object({
    expiresAt: z.number(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeExpirationRequest} setEnvelopeExpirationRequest
 * @property {number} - Unix timestamp of the expiration date
 */
export type SetEnvelopeExpirationRequest = z.infer<typeof setEnvelopeExpirationRequest>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeExpirationRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeExpirationRequestResponse = z.lazy(() => {
  return z
    .object({
      expires_at: z.number(),
    })
    .transform((data) => ({
      expiresAt: data['expires_at'],
    }));
});

/**
 * Zod schema for mapping the SetEnvelopeExpirationRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeExpirationRequestRequest = z.lazy(() => {
  return z
    .object({
      expiresAt: z.number(),
    })
    .transform((data) => ({
      expires_at: data['expiresAt'],
    }));
});

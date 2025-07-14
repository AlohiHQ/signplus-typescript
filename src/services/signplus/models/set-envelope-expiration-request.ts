import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

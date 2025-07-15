import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const setEnvelopeLegalityLevelRequest = z.lazy(() => {
  return z.object({
    legalityLevel: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeLegalityLevelRequest} setEnvelopeLegalityLevelRequest
 * @property {EnvelopeLegalityLevel} - Legal level of the envelope (SES is Simple Electronic Signature, QES_EIDAS is Qualified Electronic Signature, QES_ZERTES is Qualified Electronic Signature with Zertes)
 */
export type SetEnvelopeLegalityLevelRequest = z.infer<typeof setEnvelopeLegalityLevelRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const setEnvelopeLegalityLevelRequestResponse = z.lazy(() => {
  return z
    .object({
      legality_level: z.string().optional(),
    })
    .transform((data) => ({
      legalityLevel: data['legality_level'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const setEnvelopeLegalityLevelRequestRequest = z.lazy(() => {
  return z
    .object({
      legalityLevel: z.string().optional(),
    })
    .transform((data) => ({
      legality_level: data['legalityLevel'],
    }));
});

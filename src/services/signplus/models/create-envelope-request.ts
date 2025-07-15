import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createEnvelopeRequest = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(2)
      .max(256)
      .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
    legalityLevel: z.string(),
    expiresAt: z.number().optional(),
    comment: z.string().optional(),
    sandbox: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {CreateEnvelopeRequest} createEnvelopeRequest
 * @property {string} - Name of the envelope
 * @property {EnvelopeLegalityLevel} - Legal level of the envelope (SES is Simple Electronic Signature, QES_EIDAS is Qualified Electronic Signature, QES_ZERTES is Qualified Electronic Signature with Zertes)
 * @property {number} - Unix timestamp of the expiration date
 * @property {string} - Comment for the envelope
 * @property {boolean} - Whether the envelope is created in sandbox mode
 */
export type CreateEnvelopeRequest = z.infer<typeof createEnvelopeRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvelopeRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(2)
        .max(256)
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
      legality_level: z.string(),
      expires_at: z.number().optional(),
      comment: z.string().optional(),
      sandbox: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      legalityLevel: data['legality_level'],
      expiresAt: data['expires_at'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvelopeRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(2)
        .max(256)
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
      legalityLevel: z.string(),
      expiresAt: z.number().optional(),
      comment: z.string().optional(),
      sandbox: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      legality_level: data['legalityLevel'],
      expires_at: data['expiresAt'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

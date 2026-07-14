import { z } from 'zod';

/**
 * Zod schema for the CreateEnvelopeRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the CreateEnvelopeRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the CreateEnvelopeRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

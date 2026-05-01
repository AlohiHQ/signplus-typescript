import { z } from 'zod';

/**
 * Zod schema for the CreateEnvelopeRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createEnvelopeRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    legalityLevel: z.string().optional().nullable(),
    expiresAt: z.number().optional().nullable(),
    comment: z.string().optional().nullable(),
    sandbox: z.boolean().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateEnvelopeRequest} createEnvelopeRequest
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {boolean}
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
      name: z.string().optional().nullable(),
      legality_level: z.string().optional().nullable(),
      expires_at: z.number().optional().nullable(),
      comment: z.string().optional().nullable(),
      sandbox: z.boolean().optional().nullable(),
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
      name: z.string().optional().nullable(),
      legalityLevel: z.string().optional().nullable(),
      expiresAt: z.number().optional().nullable(),
      comment: z.string().optional().nullable(),
      sandbox: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      legality_level: data['legalityLevel'],
      expires_at: data['expiresAt'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

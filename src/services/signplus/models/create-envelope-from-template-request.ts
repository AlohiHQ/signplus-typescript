import { z } from 'zod';

/**
 * Zod schema for the CreateEnvelopeFromTemplateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createEnvelopeFromTemplateRequest = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(2)
      .max(256)
      .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
    comment: z.string().optional(),
    sandbox: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {CreateEnvelopeFromTemplateRequest} createEnvelopeFromTemplateRequest
 * @property {string} - Name of the envelope
 * @property {string} - Comment for the envelope
 * @property {boolean} - Whether the envelope is created in sandbox mode
 */
export type CreateEnvelopeFromTemplateRequest = z.infer<typeof createEnvelopeFromTemplateRequest>;

/**
 * Zod schema for mapping API responses to the CreateEnvelopeFromTemplateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createEnvelopeFromTemplateRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(2)
        .max(256)
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
      comment: z.string().optional(),
      sandbox: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

/**
 * Zod schema for mapping the CreateEnvelopeFromTemplateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createEnvelopeFromTemplateRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(2)
        .max(256)
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
      comment: z.string().optional(),
      sandbox: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

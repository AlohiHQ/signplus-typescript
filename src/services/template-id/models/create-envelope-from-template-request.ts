import { z } from 'zod';

/**
 * Zod schema for the CreateEnvelopeFromTemplateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createEnvelopeFromTemplateRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    comment: z.string().optional().nullable(),
    sandbox: z.boolean().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateEnvelopeFromTemplateRequest} createEnvelopeFromTemplateRequest
 * @property {string}
 * @property {string}
 * @property {boolean}
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
      name: z.string().optional().nullable(),
      comment: z.string().optional().nullable(),
      sandbox: z.boolean().optional().nullable(),
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
      name: z.string().optional().nullable(),
      comment: z.string().optional().nullable(),
      sandbox: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createEnvelopeFromTemplateRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvelopeFromTemplateRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvelopeFromTemplateRequestRequest = z.lazy(() => {
  return z
    .object({ name: z.string().nullish(), comment: z.string().nullish(), sandbox: z.boolean().nullish() })
    .transform((data) => ({
      name: data['name'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

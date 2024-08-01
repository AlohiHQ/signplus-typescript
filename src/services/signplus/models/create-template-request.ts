import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createTemplateRequest = z.lazy(() => {
  return z.object({
    name: z.string(),
  });
});

/**
 *
 * @typedef  {CreateTemplateRequest} createTemplateRequest
 * @property {string}
 */
export type CreateTemplateRequest = z.infer<typeof createTemplateRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createTemplateRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createTemplateRequestRequest = z.lazy(() => {
  return z.object({ name: z.string().nullish() }).transform((data) => ({
    name: data['name'],
  }));
});

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const renameTemplateRequest = z.lazy(() => {
  return z.object({
    name: z.string(),
  });
});

/**
 *
 * @typedef  {RenameTemplateRequest} renameTemplateRequest
 * @property {string} - Name of the template
 */
export type RenameTemplateRequest = z.infer<typeof renameTemplateRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const renameTemplateRequestResponse = z.lazy(() => {
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
export const renameTemplateRequestRequest = z.lazy(() => {
  return z.object({ name: z.string().nullish() }).transform((data) => ({
    name: data['name'],
  }));
});

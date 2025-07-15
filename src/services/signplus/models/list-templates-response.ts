import { z } from 'zod';
import { Template, template, templateRequest, templateResponse } from './template';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listTemplatesResponse = z.lazy(() => {
  return z.object({
    hasNextPage: z.boolean().optional(),
    hasPreviousPage: z.boolean().optional(),
    templates: z.array(template).optional(),
  });
});

/**
 *
 * @typedef  {ListTemplatesResponse} listTemplatesResponse
 * @property {boolean} - Whether there is a next page
 * @property {boolean} - Whether there is a previous page
 * @property {Template[]}
 */
export type ListTemplatesResponse = z.infer<typeof listTemplatesResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listTemplatesResponseResponse = z.lazy(() => {
  return z
    .object({
      has_next_page: z.boolean().optional(),
      has_previous_page: z.boolean().optional(),
      templates: z.array(templateResponse).optional(),
    })
    .transform((data) => ({
      hasNextPage: data['has_next_page'],
      hasPreviousPage: data['has_previous_page'],
      templates: data['templates'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listTemplatesResponseRequest = z.lazy(() => {
  return z
    .object({
      hasNextPage: z.boolean().optional(),
      hasPreviousPage: z.boolean().optional(),
      templates: z.array(templateRequest).optional(),
    })
    .transform((data) => ({
      has_next_page: data['hasNextPage'],
      has_previous_page: data['hasPreviousPage'],
      templates: data['templates'],
    }));
});

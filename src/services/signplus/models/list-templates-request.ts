import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listTemplatesRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    tags: z.array(z.string()).optional(),
    ids: z.array(z.string()).optional(),
    first: z.number().optional(),
    last: z.number().optional(),
    after: z.string().optional(),
    before: z.string().optional(),
    orderField: z.string().optional(),
    ascending: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {ListTemplatesRequest} listTemplatesRequest
 * @property {string} - Name of the template
 * @property {string[]} - List of tag templates
 * @property {string[]} - List of templates IDs
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {TemplateOrderField} - Field to order templates by
 * @property {boolean} - Whether to order templates in ascending order
 */
export type ListTemplatesRequest = z.infer<typeof listTemplatesRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listTemplatesRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      tags: z.array(z.string()).optional(),
      ids: z.array(z.string()).optional(),
      first: z.number().optional(),
      last: z.number().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
      order_field: z.string().optional(),
      ascending: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      tags: data['tags'],
      ids: data['ids'],
      first: data['first'],
      last: data['last'],
      after: data['after'],
      before: data['before'],
      orderField: data['order_field'],
      ascending: data['ascending'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listTemplatesRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      tags: z.array(z.string()).optional(),
      ids: z.array(z.string()).optional(),
      first: z.number().optional(),
      last: z.number().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
      orderField: z.string().optional(),
      ascending: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      tags: data['tags'],
      ids: data['ids'],
      first: data['first'],
      last: data['last'],
      after: data['after'],
      before: data['before'],
      order_field: data['orderField'],
      ascending: data['ascending'],
    }));
});

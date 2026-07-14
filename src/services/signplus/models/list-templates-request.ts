import { z } from 'zod';

/**
 * Zod schema for the ListTemplatesRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ListTemplatesRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ListTemplatesRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

import { z } from 'zod';
import { Template, template, templateRequest, templateResponse } from './template';

/**
 * Zod schema for the ListTemplatesResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ListTemplatesResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ListTemplatesResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

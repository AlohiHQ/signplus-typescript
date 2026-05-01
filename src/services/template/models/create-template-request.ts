import { z } from 'zod';

/**
 * Zod schema for the CreateTemplateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createTemplateRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateTemplateRequest} createTemplateRequest
 * @property {string}
 */
export type CreateTemplateRequest = z.infer<typeof createTemplateRequest>;

/**
 * Zod schema for mapping API responses to the CreateTemplateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createTemplateRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the CreateTemplateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createTemplateRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

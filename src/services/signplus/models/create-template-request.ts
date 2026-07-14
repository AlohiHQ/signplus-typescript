import { z } from 'zod';

/**
 * Zod schema for the CreateTemplateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createTemplateRequest = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(2)
      .max(256)
      .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
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
      name: z
        .string()
        .min(2)
        .max(256)
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
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
      name: z
        .string()
        .min(2)
        .max(256)
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

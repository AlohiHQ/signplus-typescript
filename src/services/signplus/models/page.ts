import { z } from 'zod';

/**
 * Zod schema for the Page model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const page = z.lazy(() => {
  return z.object({
    width: z.number().optional(),
    height: z.number().optional(),
  });
});

/**
 *
 * @typedef  {Page} page
 * @property {number} - Width of the page in pixels
 * @property {number} - Height of the page in pixels
 */
export type Page = z.infer<typeof page>;

/**
 * Zod schema for mapping API responses to the Page application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pageResponse = z.lazy(() => {
  return z
    .object({
      width: z.number().optional(),
      height: z.number().optional(),
    })
    .transform((data) => ({
      width: data['width'],
      height: data['height'],
    }));
});

/**
 * Zod schema for mapping the Page application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pageRequest = z.lazy(() => {
  return z
    .object({
      width: z.number().optional(),
      height: z.number().optional(),
    })
    .transform((data) => ({
      width: data['width'],
      height: data['height'],
    }));
});

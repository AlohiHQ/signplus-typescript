import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

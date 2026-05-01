import { z } from 'zod';

/**
 * Zod schema for the DatetimeFont1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const datetimeFont1 = z.lazy(() => {
  return z.object({
    family: z.string().optional().nullable(),
    italic: z.string().optional().nullable(),
    bold: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {DatetimeFont1} datetimeFont1
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type DatetimeFont1 = z.infer<typeof datetimeFont1>;

/**
 * Zod schema for mapping API responses to the DatetimeFont1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const datetimeFont1Response = z.lazy(() => {
  return z
    .object({
      family: z.string().optional().nullable(),
      italic: z.string().optional().nullable(),
      bold: z.string().optional().nullable(),
    })
    .transform((data) => ({
      family: data['family'],
      italic: data['italic'],
      bold: data['bold'],
    }));
});

/**
 * Zod schema for mapping the DatetimeFont1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const datetimeFont1Request = z.lazy(() => {
  return z
    .object({
      family: z.string().optional().nullable(),
      italic: z.string().optional().nullable(),
      bold: z.string().optional().nullable(),
    })
    .transform((data) => ({
      family: data['family'],
      italic: data['italic'],
      bold: data['bold'],
    }));
});

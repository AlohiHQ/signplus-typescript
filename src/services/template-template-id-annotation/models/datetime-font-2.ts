import { z } from 'zod';

/**
 * Zod schema for the DatetimeFont2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const datetimeFont2 = z.lazy(() => {
  return z.object({
    family: z.string().optional().nullable(),
    italic: z.boolean().optional().nullable(),
    bold: z.boolean().optional().nullable(),
  });
});

/**
 *
 * @typedef  {DatetimeFont2} datetimeFont2
 * @property {string}
 * @property {boolean}
 * @property {boolean}
 */
export type DatetimeFont2 = z.infer<typeof datetimeFont2>;

/**
 * Zod schema for mapping API responses to the DatetimeFont2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const datetimeFont2Response = z.lazy(() => {
  return z
    .object({
      family: z.string().optional().nullable(),
      italic: z.boolean().optional().nullable(),
      bold: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      family: data['family'],
      italic: data['italic'],
      bold: data['bold'],
    }));
});

/**
 * Zod schema for mapping the DatetimeFont2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const datetimeFont2Request = z.lazy(() => {
  return z
    .object({
      family: z.string().optional().nullable(),
      italic: z.boolean().optional().nullable(),
      bold: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      family: data['family'],
      italic: data['italic'],
      bold: data['bold'],
    }));
});

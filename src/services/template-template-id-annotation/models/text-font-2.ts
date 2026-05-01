import { z } from 'zod';

/**
 * Zod schema for the TextFont2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const textFont2 = z.lazy(() => {
  return z.object({
    family: z.string().optional().nullable(),
    italic: z.boolean().optional().nullable(),
    bold: z.boolean().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TextFont2} textFont2
 * @property {string}
 * @property {boolean}
 * @property {boolean}
 */
export type TextFont2 = z.infer<typeof textFont2>;

/**
 * Zod schema for mapping API responses to the TextFont2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const textFont2Response = z.lazy(() => {
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
 * Zod schema for mapping the TextFont2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const textFont2Request = z.lazy(() => {
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

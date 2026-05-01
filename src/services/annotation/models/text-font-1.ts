import { z } from 'zod';

/**
 * Zod schema for the TextFont1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const textFont1 = z.lazy(() => {
  return z.object({
    family: z.string().optional().nullable(),
    italic: z.string().optional().nullable(),
    bold: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TextFont1} textFont1
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type TextFont1 = z.infer<typeof textFont1>;

/**
 * Zod schema for mapping API responses to the TextFont1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const textFont1Response = z.lazy(() => {
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
 * Zod schema for mapping the TextFont1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const textFont1Request = z.lazy(() => {
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

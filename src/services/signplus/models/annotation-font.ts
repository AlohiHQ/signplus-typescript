import { z } from 'zod';

/**
 * Zod schema for the AnnotationFont model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const annotationFont = z.lazy(() => {
  return z.object({
    family: z.string().optional(),
    italic: z.boolean().optional(),
    bold: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {AnnotationFont} annotationFont
 * @property {AnnotationFontFamily} - Font family of the text
 * @property {boolean} - Whether the text is italic
 * @property {boolean} - Whether the text is bold
 */
export type AnnotationFont = z.infer<typeof annotationFont>;

/**
 * Zod schema for mapping API responses to the AnnotationFont application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const annotationFontResponse = z.lazy(() => {
  return z
    .object({
      family: z.string().optional(),
      italic: z.boolean().optional(),
      bold: z.boolean().optional(),
    })
    .transform((data) => ({
      family: data['family'],
      italic: data['italic'],
      bold: data['bold'],
    }));
});

/**
 * Zod schema for mapping the AnnotationFont application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const annotationFontRequest = z.lazy(() => {
  return z
    .object({
      family: z.string().optional(),
      italic: z.boolean().optional(),
      bold: z.boolean().optional(),
    })
    .transform((data) => ({
      family: data['family'],
      italic: data['italic'],
      bold: data['bold'],
    }));
});

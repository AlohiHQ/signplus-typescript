import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationFontRequest = z.lazy(() => {
  return z
    .object({ family: z.string().nullish(), italic: z.boolean().nullish(), bold: z.boolean().nullish() })
    .transform((data) => ({
      family: data['family'],
      italic: data['italic'],
      bold: data['bold'],
    }));
});

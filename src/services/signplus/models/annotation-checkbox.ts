import { z } from 'zod';

/**
 * Zod schema for the AnnotationCheckbox model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const annotationCheckbox = z.lazy(() => {
  return z.object({
    checked: z.boolean().optional(),
    style: z.string().optional(),
  });
});

/**
 * Checkbox annotation (null if annotation is not a checkbox)
 * @typedef  {AnnotationCheckbox} annotationCheckbox - Checkbox annotation (null if annotation is not a checkbox) - Checkbox annotation (null if annotation is not a checkbox)
 * @property {boolean} - Whether the checkbox is checked
 * @property {AnnotationCheckboxStyle} - Style of the checkbox
 */
export type AnnotationCheckbox = z.infer<typeof annotationCheckbox>;

/**
 * Zod schema for mapping API responses to the AnnotationCheckbox application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const annotationCheckboxResponse = z.lazy(() => {
  return z
    .object({
      checked: z.boolean().optional(),
      style: z.string().optional(),
    })
    .transform((data) => ({
      checked: data['checked'],
      style: data['style'],
    }));
});

/**
 * Zod schema for mapping the AnnotationCheckbox application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const annotationCheckboxRequest = z.lazy(() => {
  return z
    .object({
      checked: z.boolean().optional(),
      style: z.string().optional(),
    })
    .transform((data) => ({
      checked: data['checked'],
      style: data['style'],
    }));
});

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationCheckboxRequest = z.lazy(() => {
  return z.object({ checked: z.boolean().nullish(), style: z.string().nullish() }).transform((data) => ({
    checked: data['checked'],
    style: data['style'],
  }));
});

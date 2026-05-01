import { z } from 'zod';

/**
 * Zod schema for the AddTemplateAnnotationRequestCheckbox model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateAnnotationRequestCheckbox = z.lazy(() => {
  return z.object({
    checked: z.boolean().optional().nullable(),
    style: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddTemplateAnnotationRequestCheckbox} addTemplateAnnotationRequestCheckbox
 * @property {boolean}
 * @property {string}
 */
export type AddTemplateAnnotationRequestCheckbox = z.infer<
  typeof addTemplateAnnotationRequestCheckbox
>;

/**
 * Zod schema for mapping API responses to the AddTemplateAnnotationRequestCheckbox application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestCheckboxResponse = z.lazy(() => {
  return z
    .object({
      checked: z.boolean().optional().nullable(),
      style: z.string().optional().nullable(),
    })
    .transform((data) => ({
      checked: data['checked'],
      style: data['style'],
    }));
});

/**
 * Zod schema for mapping the AddTemplateAnnotationRequestCheckbox application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestCheckboxRequest = z.lazy(() => {
  return z
    .object({
      checked: z.boolean().optional().nullable(),
      style: z.string().optional().nullable(),
    })
    .transform((data) => ({
      checked: data['checked'],
      style: data['style'],
    }));
});

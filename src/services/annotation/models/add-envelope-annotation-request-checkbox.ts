import { z } from 'zod';

/**
 * Zod schema for the AddEnvelopeAnnotationRequestCheckbox model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeAnnotationRequestCheckbox = z.lazy(() => {
  return z.object({
    checked: z.string().optional().nullable(),
    style: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeAnnotationRequestCheckbox} addEnvelopeAnnotationRequestCheckbox
 * @property {string}
 * @property {string}
 */
export type AddEnvelopeAnnotationRequestCheckbox = z.infer<
  typeof addEnvelopeAnnotationRequestCheckbox
>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeAnnotationRequestCheckbox application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestCheckboxResponse = z.lazy(() => {
  return z
    .object({
      checked: z.string().optional().nullable(),
      style: z.string().optional().nullable(),
    })
    .transform((data) => ({
      checked: data['checked'],
      style: data['style'],
    }));
});

/**
 * Zod schema for mapping the AddEnvelopeAnnotationRequestCheckbox application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestCheckboxRequest = z.lazy(() => {
  return z
    .object({
      checked: z.string().optional().nullable(),
      style: z.string().optional().nullable(),
    })
    .transform((data) => ({
      checked: data['checked'],
      style: data['style'],
    }));
});

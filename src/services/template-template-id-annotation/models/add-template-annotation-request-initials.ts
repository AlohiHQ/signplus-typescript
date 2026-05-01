import { z } from 'zod';

/**
 * Zod schema for the AddTemplateAnnotationRequestInitials model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateAnnotationRequestInitials = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddTemplateAnnotationRequestInitials} addTemplateAnnotationRequestInitials
 * @property {string}
 */
export type AddTemplateAnnotationRequestInitials = z.infer<
  typeof addTemplateAnnotationRequestInitials
>;

/**
 * Zod schema for mapping API responses to the AddTemplateAnnotationRequestInitials application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestInitialsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the AddTemplateAnnotationRequestInitials application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestInitialsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

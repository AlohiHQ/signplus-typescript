import { z } from 'zod';

/**
 * Zod schema for the AddEnvelopeAnnotationRequestInitials model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeAnnotationRequestInitials = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeAnnotationRequestInitials} addEnvelopeAnnotationRequestInitials
 * @property {string}
 */
export type AddEnvelopeAnnotationRequestInitials = z.infer<
  typeof addEnvelopeAnnotationRequestInitials
>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeAnnotationRequestInitials application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestInitialsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the AddEnvelopeAnnotationRequestInitials application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestInitialsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

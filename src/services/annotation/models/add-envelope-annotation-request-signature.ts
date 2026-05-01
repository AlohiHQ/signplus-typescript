import { z } from 'zod';

/**
 * Zod schema for the AddEnvelopeAnnotationRequestSignature model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeAnnotationRequestSignature = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeAnnotationRequestSignature} addEnvelopeAnnotationRequestSignature
 * @property {string}
 */
export type AddEnvelopeAnnotationRequestSignature = z.infer<
  typeof addEnvelopeAnnotationRequestSignature
>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeAnnotationRequestSignature application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestSignatureResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the AddEnvelopeAnnotationRequestSignature application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestSignatureRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

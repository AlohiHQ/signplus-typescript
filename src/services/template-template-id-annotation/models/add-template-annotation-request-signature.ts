import { z } from 'zod';

/**
 * Zod schema for the AddTemplateAnnotationRequestSignature model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateAnnotationRequestSignature = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddTemplateAnnotationRequestSignature} addTemplateAnnotationRequestSignature
 * @property {string}
 */
export type AddTemplateAnnotationRequestSignature = z.infer<
  typeof addTemplateAnnotationRequestSignature
>;

/**
 * Zod schema for mapping API responses to the AddTemplateAnnotationRequestSignature application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestSignatureResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the AddTemplateAnnotationRequestSignature application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestSignatureRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

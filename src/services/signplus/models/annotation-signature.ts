import { z } from 'zod';

/**
 * Zod schema for the AnnotationSignature model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const annotationSignature = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Signature annotation (null if annotation is not a signature)
 * @typedef  {AnnotationSignature} annotationSignature - Signature annotation (null if annotation is not a signature) - Signature annotation (null if annotation is not a signature)
 * @property {string} - Unique identifier of the annotation signature
 */
export type AnnotationSignature = z.infer<typeof annotationSignature>;

/**
 * Zod schema for mapping API responses to the AnnotationSignature application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const annotationSignatureResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the AnnotationSignature application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const annotationSignatureRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

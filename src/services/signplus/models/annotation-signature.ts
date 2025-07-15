import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

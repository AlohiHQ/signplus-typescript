import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const annotationInitials = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Initials annotation (null if annotation is not initials)
 * @typedef  {AnnotationInitials} annotationInitials - Initials annotation (null if annotation is not initials) - Initials annotation (null if annotation is not initials)
 * @property {string} - Unique identifier of the annotation initials
 */
export type AnnotationInitials = z.infer<typeof annotationInitials>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationInitialsResponse = z.lazy(() => {
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
export const annotationInitialsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

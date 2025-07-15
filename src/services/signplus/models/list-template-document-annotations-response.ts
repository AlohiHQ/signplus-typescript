import { z } from 'zod';
import { Annotation, annotation, annotationRequest, annotationResponse } from './annotation';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listTemplateDocumentAnnotationsResponse = z.lazy(() => {
  return z.object({
    annotations: z.array(annotation).optional(),
  });
});

/**
 *
 * @typedef  {ListTemplateDocumentAnnotationsResponse} listTemplateDocumentAnnotationsResponse
 * @property {Annotation[]}
 */
export type ListTemplateDocumentAnnotationsResponse = z.infer<typeof listTemplateDocumentAnnotationsResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listTemplateDocumentAnnotationsResponseResponse = z.lazy(() => {
  return z
    .object({
      annotations: z.array(annotationResponse).optional(),
    })
    .transform((data) => ({
      annotations: data['annotations'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listTemplateDocumentAnnotationsResponseRequest = z.lazy(() => {
  return z
    .object({
      annotations: z.array(annotationRequest).optional(),
    })
    .transform((data) => ({
      annotations: data['annotations'],
    }));
});

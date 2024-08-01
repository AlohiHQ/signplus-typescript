import { z } from 'zod';
import { annotation, annotationRequest, annotationResponse } from './annotation';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listEnvelopeDocumentAnnotationsResponse = z.lazy(() => {
  return z.object({
    annotations: z.array(annotation).optional(),
  });
});

/**
 *
 * @typedef  {ListEnvelopeDocumentAnnotationsResponse} listEnvelopeDocumentAnnotationsResponse
 * @property {Annotation[]}
 */
export type ListEnvelopeDocumentAnnotationsResponse = z.infer<typeof listEnvelopeDocumentAnnotationsResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listEnvelopeDocumentAnnotationsResponseResponse = z.lazy(() => {
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
export const listEnvelopeDocumentAnnotationsResponseRequest = z.lazy(() => {
  return z.object({ annotations: z.array(annotationRequest).nullish() }).transform((data) => ({
    annotations: data['annotations'],
  }));
});

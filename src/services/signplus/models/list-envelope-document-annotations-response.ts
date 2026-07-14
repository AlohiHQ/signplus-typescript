import { z } from 'zod';
import { Annotation, annotation, annotationRequest, annotationResponse } from './annotation';

/**
 * Zod schema for the ListEnvelopeDocumentAnnotationsResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
export type ListEnvelopeDocumentAnnotationsResponse = z.infer<
  typeof listEnvelopeDocumentAnnotationsResponse
>;

/**
 * Zod schema for mapping API responses to the ListEnvelopeDocumentAnnotationsResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ListEnvelopeDocumentAnnotationsResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listEnvelopeDocumentAnnotationsResponseRequest = z.lazy(() => {
  return z
    .object({
      annotations: z.array(annotationRequest).optional(),
    })
    .transform((data) => ({
      annotations: data['annotations'],
    }));
});

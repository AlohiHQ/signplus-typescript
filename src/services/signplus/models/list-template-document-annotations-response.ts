import { z } from 'zod';
import { Annotation, annotation, annotationRequest, annotationResponse } from './annotation';

/**
 * Zod schema for the ListTemplateDocumentAnnotationsResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
export type ListTemplateDocumentAnnotationsResponse = z.infer<
  typeof listTemplateDocumentAnnotationsResponse
>;

/**
 * Zod schema for mapping API responses to the ListTemplateDocumentAnnotationsResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ListTemplateDocumentAnnotationsResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

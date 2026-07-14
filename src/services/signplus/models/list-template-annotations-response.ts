import { z } from 'zod';
import { Annotation, annotation, annotationRequest, annotationResponse } from './annotation';

/**
 * Zod schema for the ListTemplateAnnotationsResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listTemplateAnnotationsResponse = z.lazy(() => {
  return z.object({
    annotations: z.array(annotation).optional(),
  });
});

/**
 *
 * @typedef  {ListTemplateAnnotationsResponse} listTemplateAnnotationsResponse
 * @property {Annotation[]}
 */
export type ListTemplateAnnotationsResponse = z.infer<typeof listTemplateAnnotationsResponse>;

/**
 * Zod schema for mapping API responses to the ListTemplateAnnotationsResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listTemplateAnnotationsResponseResponse = z.lazy(() => {
  return z
    .object({
      annotations: z.array(annotationResponse).optional(),
    })
    .transform((data) => ({
      annotations: data['annotations'],
    }));
});

/**
 * Zod schema for mapping the ListTemplateAnnotationsResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listTemplateAnnotationsResponseRequest = z.lazy(() => {
  return z
    .object({
      annotations: z.array(annotationRequest).optional(),
    })
    .transform((data) => ({
      annotations: data['annotations'],
    }));
});

import { z } from 'zod';
import { Document, document, documentRequest, documentResponse } from './document';

/**
 * Zod schema for the ListEnvelopeDocumentsResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listEnvelopeDocumentsResponse = z.lazy(() => {
  return z.object({
    documents: z.array(document).optional(),
  });
});

/**
 *
 * @typedef  {ListEnvelopeDocumentsResponse} listEnvelopeDocumentsResponse
 * @property {Document[]}
 */
export type ListEnvelopeDocumentsResponse = z.infer<typeof listEnvelopeDocumentsResponse>;

/**
 * Zod schema for mapping API responses to the ListEnvelopeDocumentsResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listEnvelopeDocumentsResponseResponse = z.lazy(() => {
  return z
    .object({
      documents: z.array(documentResponse).optional(),
    })
    .transform((data) => ({
      documents: data['documents'],
    }));
});

/**
 * Zod schema for mapping the ListEnvelopeDocumentsResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listEnvelopeDocumentsResponseRequest = z.lazy(() => {
  return z
    .object({
      documents: z.array(documentRequest).optional(),
    })
    .transform((data) => ({
      documents: data['documents'],
    }));
});

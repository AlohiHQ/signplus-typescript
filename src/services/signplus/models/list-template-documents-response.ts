import { z } from 'zod';
import { Document, document, documentRequest, documentResponse } from './document';

/**
 * Zod schema for the ListTemplateDocumentsResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listTemplateDocumentsResponse = z.lazy(() => {
  return z.object({
    documents: z.array(document).optional(),
  });
});

/**
 *
 * @typedef  {ListTemplateDocumentsResponse} listTemplateDocumentsResponse
 * @property {Document[]}
 */
export type ListTemplateDocumentsResponse = z.infer<typeof listTemplateDocumentsResponse>;

/**
 * Zod schema for mapping API responses to the ListTemplateDocumentsResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listTemplateDocumentsResponseResponse = z.lazy(() => {
  return z
    .object({
      documents: z.array(documentResponse).optional(),
    })
    .transform((data) => ({
      documents: data['documents'],
    }));
});

/**
 * Zod schema for mapping the ListTemplateDocumentsResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listTemplateDocumentsResponseRequest = z.lazy(() => {
  return z
    .object({
      documents: z.array(documentRequest).optional(),
    })
    .transform((data) => ({
      documents: data['documents'],
    }));
});

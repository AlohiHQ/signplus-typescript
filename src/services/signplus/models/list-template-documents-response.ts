import { z } from 'zod';
import { Document, document, documentRequest, documentResponse } from './document';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

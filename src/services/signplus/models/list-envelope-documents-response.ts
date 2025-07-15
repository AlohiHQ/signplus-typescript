import { z } from 'zod';
import { Document, document, documentRequest, documentResponse } from './document';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

import { z } from 'zod';
import { Envelope, envelope, envelopeRequest, envelopeResponse } from './envelope';

/**
 * Zod schema for the ListEnvelopesResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listEnvelopesResponse = z.lazy(() => {
  return z.object({
    hasNextPage: z.boolean().optional(),
    hasPreviousPage: z.boolean().optional(),
    envelopes: z.array(envelope).optional(),
  });
});

/**
 *
 * @typedef  {ListEnvelopesResponse} listEnvelopesResponse
 * @property {boolean} - Whether there is a next page
 * @property {boolean} - Whether there is a previous page
 * @property {Envelope[]}
 */
export type ListEnvelopesResponse = z.infer<typeof listEnvelopesResponse>;

/**
 * Zod schema for mapping API responses to the ListEnvelopesResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listEnvelopesResponseResponse = z.lazy(() => {
  return z
    .object({
      has_next_page: z.boolean().optional(),
      has_previous_page: z.boolean().optional(),
      envelopes: z.array(envelopeResponse).optional(),
    })
    .transform((data) => ({
      hasNextPage: data['has_next_page'],
      hasPreviousPage: data['has_previous_page'],
      envelopes: data['envelopes'],
    }));
});

/**
 * Zod schema for mapping the ListEnvelopesResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listEnvelopesResponseRequest = z.lazy(() => {
  return z
    .object({
      hasNextPage: z.boolean().optional(),
      hasPreviousPage: z.boolean().optional(),
      envelopes: z.array(envelopeRequest).optional(),
    })
    .transform((data) => ({
      has_next_page: data['hasNextPage'],
      has_previous_page: data['hasPreviousPage'],
      envelopes: data['envelopes'],
    }));
});

import { z } from 'zod';
import { Envelope, envelope, envelopeRequest, envelopeResponse } from './envelope';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

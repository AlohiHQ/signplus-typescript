import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const setEnvelopeCommentRequest = z.lazy(() => {
  return z.object({
    comment: z.string(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeCommentRequest} setEnvelopeCommentRequest
 * @property {string} - Comment for the envelope
 */
export type SetEnvelopeCommentRequest = z.infer<typeof setEnvelopeCommentRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const setEnvelopeCommentRequestResponse = z.lazy(() => {
  return z
    .object({
      comment: z.string(),
    })
    .transform((data) => ({
      comment: data['comment'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const setEnvelopeCommentRequestRequest = z.lazy(() => {
  return z
    .object({
      comment: z.string(),
    })
    .transform((data) => ({
      comment: data['comment'],
    }));
});

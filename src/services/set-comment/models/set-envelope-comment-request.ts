import { z } from 'zod';

/**
 * Zod schema for the SetEnvelopeCommentRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeCommentRequest = z.lazy(() => {
  return z.object({
    comment: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeCommentRequest} setEnvelopeCommentRequest
 * @property {string}
 */
export type SetEnvelopeCommentRequest = z.infer<typeof setEnvelopeCommentRequest>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeCommentRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeCommentRequestResponse = z.lazy(() => {
  return z
    .object({
      comment: z.string().optional().nullable(),
    })
    .transform((data) => ({
      comment: data['comment'],
    }));
});

/**
 * Zod schema for mapping the SetEnvelopeCommentRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeCommentRequestRequest = z.lazy(() => {
  return z
    .object({
      comment: z.string().optional().nullable(),
    })
    .transform((data) => ({
      comment: data['comment'],
    }));
});

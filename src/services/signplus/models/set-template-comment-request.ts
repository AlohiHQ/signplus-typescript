import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const setTemplateCommentRequest = z.lazy(() => {
  return z.object({
    comment: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SetTemplateCommentRequest} setTemplateCommentRequest
 * @property {string} - Comment for the template
 */
export type SetTemplateCommentRequest = z.infer<typeof setTemplateCommentRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const setTemplateCommentRequestResponse = z.lazy(() => {
  return z
    .object({
      comment: z.string().optional(),
    })
    .transform((data) => ({
      comment: data['comment'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const setTemplateCommentRequestRequest = z.lazy(() => {
  return z.object({ comment: z.string().nullish() }).transform((data) => ({
    comment: data['comment'],
  }));
});

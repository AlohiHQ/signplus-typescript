import { z } from 'zod';

/**
 * Zod schema for the SetTemplateCommentRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setTemplateCommentRequest = z.lazy(() => {
  return z.object({
    comment: z.string(),
  });
});

/**
 *
 * @typedef  {SetTemplateCommentRequest} setTemplateCommentRequest
 * @property {string} - Comment for the template
 */
export type SetTemplateCommentRequest = z.infer<typeof setTemplateCommentRequest>;

/**
 * Zod schema for mapping API responses to the SetTemplateCommentRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateCommentRequestResponse = z.lazy(() => {
  return z
    .object({
      comment: z.string(),
    })
    .transform((data) => ({
      comment: data['comment'],
    }));
});

/**
 * Zod schema for mapping the SetTemplateCommentRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateCommentRequestRequest = z.lazy(() => {
  return z
    .object({
      comment: z.string(),
    })
    .transform((data) => ({
      comment: data['comment'],
    }));
});

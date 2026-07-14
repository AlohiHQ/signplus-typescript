import { z } from 'zod';

/**
 * Zod schema for the AttachmentPlaceholderRequest1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const attachmentPlaceholderRequest1 = z.lazy(() => {
  return z.object({
    recipientId: z.string(),
    id: z.string().optional(),
    name: z.string(),
    hint: z.string().optional(),
    required: z.boolean(),
    multiple: z.boolean(),
  });
});

/**
 *
 * @typedef  {AttachmentPlaceholderRequest1} attachmentPlaceholderRequest1
 * @property {string} - ID of the recipient
 * @property {string} - ID of the attachment placeholder
 * @property {string}
 * @property {string} - Hint of the attachment placeholder
 * @property {boolean} - Whether the attachment placeholder is required
 * @property {boolean}
 */
export type AttachmentPlaceholderRequest1 = z.infer<typeof attachmentPlaceholderRequest1>;

/**
 * Zod schema for mapping API responses to the AttachmentPlaceholderRequest1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const attachmentPlaceholderRequest1Response = z.lazy(() => {
  return z
    .object({
      recipient_id: z.string(),
      id: z.string().optional(),
      name: z.string(),
      hint: z.string().optional(),
      required: z.boolean(),
      multiple: z.boolean(),
    })
    .transform((data) => ({
      recipientId: data['recipient_id'],
      id: data['id'],
      name: data['name'],
      hint: data['hint'],
      required: data['required'],
      multiple: data['multiple'],
    }));
});

/**
 * Zod schema for mapping the AttachmentPlaceholderRequest1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const attachmentPlaceholderRequest1Request = z.lazy(() => {
  return z
    .object({
      recipientId: z.string(),
      id: z.string().optional(),
      name: z.string(),
      hint: z.string().optional(),
      required: z.boolean(),
      multiple: z.boolean(),
    })
    .transform((data) => ({
      recipient_id: data['recipientId'],
      id: data['id'],
      name: data['name'],
      hint: data['hint'],
      required: data['required'],
      multiple: data['multiple'],
    }));
});

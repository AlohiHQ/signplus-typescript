import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

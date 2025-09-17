import { z } from 'zod';
import {
  AttachmentPlaceholderFile,
  attachmentPlaceholderFile,
  attachmentPlaceholderFileRequest,
  attachmentPlaceholderFileResponse,
} from './attachment-placeholder-file';

/**
 * The shape of the model inside the application code - what the users use
 */
export const attachmentPlaceholder = z.lazy(() => {
  return z.object({
    recipientId: z.string().optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    hint: z.string().optional(),
    required: z.boolean().optional(),
    multiple: z.boolean().optional(),
    files: z.array(attachmentPlaceholderFile).optional(),
  });
});

/**
 *
 * @typedef  {AttachmentPlaceholder} attachmentPlaceholder
 * @property {string} - ID of the recipient
 * @property {string} - ID of the attachment placeholder
 * @property {string} - Name of the attachment placeholder
 * @property {string} - Hint of the attachment placeholder
 * @property {boolean} - Whether the attachment placeholder is required
 * @property {boolean} - Whether the attachment placeholder can have multiple files
 * @property {AttachmentPlaceholderFile[]}
 */
export type AttachmentPlaceholder = z.infer<typeof attachmentPlaceholder>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const attachmentPlaceholderResponse = z.lazy(() => {
  return z
    .object({
      recipient_id: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      hint: z.string().optional(),
      required: z.boolean().optional(),
      multiple: z.boolean().optional(),
      files: z.array(attachmentPlaceholderFileResponse).optional(),
    })
    .transform((data) => ({
      recipientId: data['recipient_id'],
      id: data['id'],
      name: data['name'],
      hint: data['hint'],
      required: data['required'],
      multiple: data['multiple'],
      files: data['files'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const attachmentPlaceholderRequest = z.lazy(() => {
  return z
    .object({
      recipientId: z.string().optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      hint: z.string().optional(),
      required: z.boolean().optional(),
      multiple: z.boolean().optional(),
      files: z.array(attachmentPlaceholderFileRequest).optional(),
    })
    .transform((data) => ({
      recipient_id: data['recipientId'],
      id: data['id'],
      name: data['name'],
      hint: data['hint'],
      required: data['required'],
      multiple: data['multiple'],
      files: data['files'],
    }));
});

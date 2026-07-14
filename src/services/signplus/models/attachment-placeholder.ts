import { z } from 'zod';
import {
  AttachmentPlaceholderFile,
  attachmentPlaceholderFile,
  attachmentPlaceholderFileRequest,
  attachmentPlaceholderFileResponse,
} from './attachment-placeholder-file';

/**
 * Zod schema for the AttachmentPlaceholder model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the AttachmentPlaceholder application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the AttachmentPlaceholder application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

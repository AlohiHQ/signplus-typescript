import { z } from 'zod';
import {
  AttachmentPlaceholder,
  attachmentPlaceholder,
  attachmentPlaceholderRequest,
  attachmentPlaceholderResponse,
} from './attachment-placeholder';

/**
 * Zod schema for the AttachmentPlaceholdersPerRecipient model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const attachmentPlaceholdersPerRecipient = z.lazy(() => {
  return z.object({
    recipientId: z.string().optional(),
    recipientName: z.string().optional(),
    placeholders: z.array(attachmentPlaceholder).optional(),
  });
});

/**
 *
 * @typedef  {AttachmentPlaceholdersPerRecipient} attachmentPlaceholdersPerRecipient
 * @property {string} - ID of the recipient
 * @property {string} - Name of the recipient
 * @property {AttachmentPlaceholder[]}
 */
export type AttachmentPlaceholdersPerRecipient = z.infer<typeof attachmentPlaceholdersPerRecipient>;

/**
 * Zod schema for mapping API responses to the AttachmentPlaceholdersPerRecipient application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const attachmentPlaceholdersPerRecipientResponse = z.lazy(() => {
  return z
    .object({
      recipient_id: z.string().optional(),
      recipient_name: z.string().optional(),
      placeholders: z.array(attachmentPlaceholderResponse).optional(),
    })
    .transform((data) => ({
      recipientId: data['recipient_id'],
      recipientName: data['recipient_name'],
      placeholders: data['placeholders'],
    }));
});

/**
 * Zod schema for mapping the AttachmentPlaceholdersPerRecipient application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const attachmentPlaceholdersPerRecipientRequest = z.lazy(() => {
  return z
    .object({
      recipientId: z.string().optional(),
      recipientName: z.string().optional(),
      placeholders: z.array(attachmentPlaceholderRequest).optional(),
    })
    .transform((data) => ({
      recipient_id: data['recipientId'],
      recipient_name: data['recipientName'],
      placeholders: data['placeholders'],
    }));
});

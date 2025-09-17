import { z } from 'zod';
import {
  AttachmentPlaceholder,
  attachmentPlaceholder,
  attachmentPlaceholderRequest,
  attachmentPlaceholderResponse,
} from './attachment-placeholder';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

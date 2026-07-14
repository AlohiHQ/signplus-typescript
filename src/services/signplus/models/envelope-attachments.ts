import { z } from 'zod';
import {
  AttachmentSettings,
  attachmentSettings,
  attachmentSettingsRequest,
  attachmentSettingsResponse,
} from './attachment-settings';
import {
  AttachmentPlaceholdersPerRecipient,
  attachmentPlaceholdersPerRecipient,
  attachmentPlaceholdersPerRecipientRequest,
  attachmentPlaceholdersPerRecipientResponse,
} from './attachment-placeholders-per-recipient';

/**
 * Zod schema for the EnvelopeAttachments model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const envelopeAttachments = z.lazy(() => {
  return z.object({
    settings: attachmentSettings.optional(),
    recipients: z.array(attachmentPlaceholdersPerRecipient).optional(),
  });
});

/**
 *
 * @typedef  {EnvelopeAttachments} envelopeAttachments
 * @property {AttachmentSettings}
 * @property {AttachmentPlaceholdersPerRecipient[]}
 */
export type EnvelopeAttachments = z.infer<typeof envelopeAttachments>;

/**
 * Zod schema for mapping API responses to the EnvelopeAttachments application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const envelopeAttachmentsResponse = z.lazy(() => {
  return z
    .object({
      settings: attachmentSettingsResponse.optional(),
      recipients: z.array(attachmentPlaceholdersPerRecipientResponse).optional(),
    })
    .transform((data) => ({
      settings: data['settings'],
      recipients: data['recipients'],
    }));
});

/**
 * Zod schema for mapping the EnvelopeAttachments application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const envelopeAttachmentsRequest = z.lazy(() => {
  return z
    .object({
      settings: attachmentSettingsRequest.optional(),
      recipients: z.array(attachmentPlaceholdersPerRecipientRequest).optional(),
    })
    .transform((data) => ({
      settings: data['settings'],
      recipients: data['recipients'],
    }));
});

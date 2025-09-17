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
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

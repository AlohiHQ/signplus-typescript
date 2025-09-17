import { z } from 'zod';
import {
  AttachmentSettings,
  attachmentSettings,
  attachmentSettingsRequest,
  attachmentSettingsResponse,
} from './attachment-settings';

/**
 * The shape of the model inside the application code - what the users use
 */
export const setEnvelopeAttachmentsSettingsRequest = z.lazy(() => {
  return z.object({
    settings: attachmentSettings,
  });
});

/**
 *
 * @typedef  {SetEnvelopeAttachmentsSettingsRequest} setEnvelopeAttachmentsSettingsRequest
 * @property {AttachmentSettings}
 */
export type SetEnvelopeAttachmentsSettingsRequest = z.infer<typeof setEnvelopeAttachmentsSettingsRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const setEnvelopeAttachmentsSettingsRequestResponse = z.lazy(() => {
  return z
    .object({
      settings: attachmentSettingsResponse,
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const setEnvelopeAttachmentsSettingsRequestRequest = z.lazy(() => {
  return z
    .object({
      settings: attachmentSettingsRequest,
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});

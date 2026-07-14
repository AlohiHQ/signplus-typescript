import { z } from 'zod';
import {
  AttachmentSettings,
  attachmentSettings,
  attachmentSettingsRequest,
  attachmentSettingsResponse,
} from './attachment-settings';

/**
 * Zod schema for the SetEnvelopeAttachmentsSettingsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
export type SetEnvelopeAttachmentsSettingsRequest = z.infer<
  typeof setEnvelopeAttachmentsSettingsRequest
>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeAttachmentsSettingsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the SetEnvelopeAttachmentsSettingsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

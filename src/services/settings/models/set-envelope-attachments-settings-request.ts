import { z } from 'zod';
import {
  SetEnvelopeAttachmentsSettingsRequestSettings,
  setEnvelopeAttachmentsSettingsRequestSettings,
  setEnvelopeAttachmentsSettingsRequestSettingsRequest,
  setEnvelopeAttachmentsSettingsRequestSettingsResponse,
} from './set-envelope-attachments-settings-request-settings';

/**
 * Zod schema for the SetEnvelopeAttachmentsSettingsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeAttachmentsSettingsRequest = z.lazy(() => {
  return z.object({
    settings: setEnvelopeAttachmentsSettingsRequestSettings.optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeAttachmentsSettingsRequest} setEnvelopeAttachmentsSettingsRequest
 * @property {SetEnvelopeAttachmentsSettingsRequestSettings}
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
      settings: setEnvelopeAttachmentsSettingsRequestSettingsResponse.optional().nullable(),
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
      settings: setEnvelopeAttachmentsSettingsRequestSettingsRequest.optional().nullable(),
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});

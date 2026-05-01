import { z } from 'zod';
import {
  SetTemplateAttachmentsSettingsRequestSettings,
  setTemplateAttachmentsSettingsRequestSettings,
  setTemplateAttachmentsSettingsRequestSettingsRequest,
  setTemplateAttachmentsSettingsRequestSettingsResponse,
} from './set-template-attachments-settings-request-settings';

/**
 * Zod schema for the SetTemplateAttachmentsSettingsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setTemplateAttachmentsSettingsRequest = z.lazy(() => {
  return z.object({
    settings: setTemplateAttachmentsSettingsRequestSettings.optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetTemplateAttachmentsSettingsRequest} setTemplateAttachmentsSettingsRequest
 * @property {SetTemplateAttachmentsSettingsRequestSettings}
 */
export type SetTemplateAttachmentsSettingsRequest = z.infer<
  typeof setTemplateAttachmentsSettingsRequest
>;

/**
 * Zod schema for mapping API responses to the SetTemplateAttachmentsSettingsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateAttachmentsSettingsRequestResponse = z.lazy(() => {
  return z
    .object({
      settings: setTemplateAttachmentsSettingsRequestSettingsResponse.optional().nullable(),
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});

/**
 * Zod schema for mapping the SetTemplateAttachmentsSettingsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateAttachmentsSettingsRequestRequest = z.lazy(() => {
  return z
    .object({
      settings: setTemplateAttachmentsSettingsRequestSettingsRequest.optional().nullable(),
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});

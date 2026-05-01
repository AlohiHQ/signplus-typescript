import { z } from 'zod';

/**
 * Zod schema for the SetTemplateAttachmentsSettingsRequestSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setTemplateAttachmentsSettingsRequestSettings = z.lazy(() => {
  return z.object({
    visibleToRecipients: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetTemplateAttachmentsSettingsRequestSettings} setTemplateAttachmentsSettingsRequestSettings
 * @property {string}
 */
export type SetTemplateAttachmentsSettingsRequestSettings = z.infer<
  typeof setTemplateAttachmentsSettingsRequestSettings
>;

/**
 * Zod schema for mapping API responses to the SetTemplateAttachmentsSettingsRequestSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateAttachmentsSettingsRequestSettingsResponse = z.lazy(() => {
  return z
    .object({
      visible_to_recipients: z.string().optional().nullable(),
    })
    .transform((data) => ({
      visibleToRecipients: data['visible_to_recipients'],
    }));
});

/**
 * Zod schema for mapping the SetTemplateAttachmentsSettingsRequestSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateAttachmentsSettingsRequestSettingsRequest = z.lazy(() => {
  return z
    .object({
      visibleToRecipients: z.string().optional().nullable(),
    })
    .transform((data) => ({
      visible_to_recipients: data['visibleToRecipients'],
    }));
});

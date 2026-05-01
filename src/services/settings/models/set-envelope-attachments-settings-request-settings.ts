import { z } from 'zod';

/**
 * Zod schema for the SetEnvelopeAttachmentsSettingsRequestSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeAttachmentsSettingsRequestSettings = z.lazy(() => {
  return z.object({
    visibleToRecipients: z.boolean().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeAttachmentsSettingsRequestSettings} setEnvelopeAttachmentsSettingsRequestSettings
 * @property {boolean}
 */
export type SetEnvelopeAttachmentsSettingsRequestSettings = z.infer<
  typeof setEnvelopeAttachmentsSettingsRequestSettings
>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeAttachmentsSettingsRequestSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeAttachmentsSettingsRequestSettingsResponse = z.lazy(() => {
  return z
    .object({
      visible_to_recipients: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      visibleToRecipients: data['visible_to_recipients'],
    }));
});

/**
 * Zod schema for mapping the SetEnvelopeAttachmentsSettingsRequestSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeAttachmentsSettingsRequestSettingsRequest = z.lazy(() => {
  return z
    .object({
      visibleToRecipients: z.boolean().optional().nullable(),
    })
    .transform((data) => ({
      visible_to_recipients: data['visibleToRecipients'],
    }));
});

import { z } from 'zod';

/**
 * Zod schema for the AttachmentSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const attachmentSettings = z.lazy(() => {
  return z.object({
    visibleToRecipients: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {AttachmentSettings} attachmentSettings
 * @property {boolean} - Whether the attachment is visible to the recipients
 */
export type AttachmentSettings = z.infer<typeof attachmentSettings>;

/**
 * Zod schema for mapping API responses to the AttachmentSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const attachmentSettingsResponse = z.lazy(() => {
  return z
    .object({
      visible_to_recipients: z.boolean().optional(),
    })
    .transform((data) => ({
      visibleToRecipients: data['visible_to_recipients'],
    }));
});

/**
 * Zod schema for mapping the AttachmentSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const attachmentSettingsRequest = z.lazy(() => {
  return z
    .object({
      visibleToRecipients: z.boolean().optional(),
    })
    .transform((data) => ({
      visible_to_recipients: data['visibleToRecipients'],
    }));
});

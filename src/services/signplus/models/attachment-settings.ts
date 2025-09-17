import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

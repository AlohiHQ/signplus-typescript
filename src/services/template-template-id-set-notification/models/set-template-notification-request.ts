import { z } from 'zod';

/**
 * Zod schema for the SetTemplateNotificationRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setTemplateNotificationRequest = z.lazy(() => {
  return z.object({
    subject: z.string().optional().nullable(),
    message: z.string().optional().nullable(),
    reminderInterval: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetTemplateNotificationRequest} setTemplateNotificationRequest
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type SetTemplateNotificationRequest = z.infer<typeof setTemplateNotificationRequest>;

/**
 * Zod schema for mapping API responses to the SetTemplateNotificationRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateNotificationRequestResponse = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      reminder_interval: z.string().optional().nullable(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
      reminderInterval: data['reminder_interval'],
    }));
});

/**
 * Zod schema for mapping the SetTemplateNotificationRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateNotificationRequestRequest = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      reminderInterval: z.string().optional().nullable(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
      reminder_interval: data['reminderInterval'],
    }));
});

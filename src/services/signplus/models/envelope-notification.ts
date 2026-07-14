import { z } from 'zod';

/**
 * Zod schema for the EnvelopeNotification model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const envelopeNotification = z.lazy(() => {
  return z.object({
    subject: z.string().optional(),
    message: z.string().optional(),
    reminderInterval: z.number().optional(),
  });
});

/**
 *
 * @typedef  {EnvelopeNotification} envelopeNotification
 * @property {string} - Subject of the notification
 * @property {string} - Message of the notification
 * @property {number} - Interval in days to send reminder
 */
export type EnvelopeNotification = z.infer<typeof envelopeNotification>;

/**
 * Zod schema for mapping API responses to the EnvelopeNotification application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const envelopeNotificationResponse = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional(),
      message: z.string().optional(),
      reminder_interval: z.number().optional(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
      reminderInterval: data['reminder_interval'],
    }));
});

/**
 * Zod schema for mapping the EnvelopeNotification application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const envelopeNotificationRequest = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional(),
      message: z.string().optional(),
      reminderInterval: z.number().optional(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
      reminder_interval: data['reminderInterval'],
    }));
});

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const envelopeNotificationRequest = z.lazy(() => {
  return z
    .object({ subject: z.string().nullish(), message: z.string().nullish(), reminderInterval: z.number().nullish() })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
      reminder_interval: data['reminderInterval'],
    }));
});

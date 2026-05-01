import { z } from 'zod';

/**
 * Zod schema for the SetEnvelopeNotificationRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeNotificationRequest = z.lazy(() => {
  return z.object({
    subject: z.string().optional().nullable(),
    message: z.string().optional().nullable(),
    reminderInterval: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeNotificationRequest} setEnvelopeNotificationRequest
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type SetEnvelopeNotificationRequest = z.infer<typeof setEnvelopeNotificationRequest>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeNotificationRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeNotificationRequestResponse = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      reminder_interval: z.number().optional().nullable(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
      reminderInterval: data['reminder_interval'],
    }));
});

/**
 * Zod schema for mapping the SetEnvelopeNotificationRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeNotificationRequestRequest = z.lazy(() => {
  return z
    .object({
      subject: z.string().optional().nullable(),
      message: z.string().optional().nullable(),
      reminderInterval: z.number().optional().nullable(),
    })
    .transform((data) => ({
      subject: data['subject'],
      message: data['message'],
      reminder_interval: data['reminderInterval'],
    }));
});

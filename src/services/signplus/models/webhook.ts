import { z } from 'zod';

/**
 * Zod schema for the Webhook model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const webhook = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    event: z.string().optional(),
    target: z.string().optional(),
  });
});

/**
 *
 * @typedef  {Webhook} webhook
 * @property {string} - Unique identifier of the webhook
 * @property {WebhookEvent} - Event of the webhook
 * @property {string} - Target URL of the webhook
 */
export type Webhook = z.infer<typeof webhook>;

/**
 * Zod schema for mapping API responses to the Webhook application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webhookResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      event: z.string().optional(),
      target: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      event: data['event'],
      target: data['target'],
    }));
});

/**
 * Zod schema for mapping the Webhook application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const webhookRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      event: z.string().optional(),
      target: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      event: data['event'],
      target: data['target'],
    }));
});

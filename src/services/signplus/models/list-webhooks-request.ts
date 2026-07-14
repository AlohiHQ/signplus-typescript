import { z } from 'zod';

/**
 * Zod schema for the ListWebhooksRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listWebhooksRequest = z.lazy(() => {
  return z.object({
    webhookId: z.string().optional(),
    event: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ListWebhooksRequest} listWebhooksRequest
 * @property {string} - ID of the webhook
 * @property {WebhookEvent} - Event of the webhook
 */
export type ListWebhooksRequest = z.infer<typeof listWebhooksRequest>;

/**
 * Zod schema for mapping API responses to the ListWebhooksRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listWebhooksRequestResponse = z.lazy(() => {
  return z
    .object({
      webhook_id: z.string().optional(),
      event: z.string().optional(),
    })
    .transform((data) => ({
      webhookId: data['webhook_id'],
      event: data['event'],
    }));
});

/**
 * Zod schema for mapping the ListWebhooksRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listWebhooksRequestRequest = z.lazy(() => {
  return z
    .object({
      webhookId: z.string().optional(),
      event: z.string().optional(),
    })
    .transform((data) => ({
      webhook_id: data['webhookId'],
      event: data['event'],
    }));
});

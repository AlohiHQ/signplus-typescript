import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listWebhooksRequestRequest = z.lazy(() => {
  return z.object({ webhookId: z.string().nullish(), event: z.string().nullish() }).transform((data) => ({
    webhook_id: data['webhookId'],
    event: data['event'],
  }));
});

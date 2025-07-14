import { z } from 'zod';
import { Webhook, webhook, webhookRequest, webhookResponse } from './webhook';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listWebhooksResponse = z.lazy(() => {
  return z.object({
    webhooks: z.array(webhook).optional(),
  });
});

/**
 *
 * @typedef  {ListWebhooksResponse} listWebhooksResponse
 * @property {Webhook[]}
 */
export type ListWebhooksResponse = z.infer<typeof listWebhooksResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listWebhooksResponseResponse = z.lazy(() => {
  return z
    .object({
      webhooks: z.array(webhookResponse).optional(),
    })
    .transform((data) => ({
      webhooks: data['webhooks'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listWebhooksResponseRequest = z.lazy(() => {
  return z
    .object({
      webhooks: z.array(webhookRequest).optional(),
    })
    .transform((data) => ({
      webhooks: data['webhooks'],
    }));
});

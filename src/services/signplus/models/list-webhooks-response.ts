import { z } from 'zod';
import { Webhook, webhook, webhookRequest, webhookResponse } from './webhook';

/**
 * Zod schema for the ListWebhooksResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the ListWebhooksResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the ListWebhooksResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

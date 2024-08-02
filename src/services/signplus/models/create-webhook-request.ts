import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createWebhookRequest = z.lazy(() => {
  return z.object({
    event: z.string(),
    target: z.string(),
  });
});

/**
 *
 * @typedef  {CreateWebhookRequest} createWebhookRequest
 * @property {WebhookEvent} - Event of the webhook
 * @property {string} - URL of the webhook target
 */
export type CreateWebhookRequest = z.infer<typeof createWebhookRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createWebhookRequestResponse = z.lazy(() => {
  return z
    .object({
      event: z.string(),
      target: z.string(),
    })
    .transform((data) => ({
      event: data['event'],
      target: data['target'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createWebhookRequestRequest = z.lazy(() => {
  return z.object({ event: z.string().nullish(), target: z.string().nullish() }).transform((data) => ({
    event: data['event'],
    target: data['target'],
  }));
});

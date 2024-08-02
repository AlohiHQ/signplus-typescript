import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const webhookRequest = z.lazy(() => {
  return z
    .object({ id: z.string().nullish(), event: z.string().nullish(), target: z.string().nullish() })
    .transform((data) => ({
      id: data['id'],
      event: data['event'],
      target: data['target'],
    }));
});

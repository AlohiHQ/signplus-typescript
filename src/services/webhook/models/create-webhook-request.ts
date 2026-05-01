import { z } from 'zod';

/**
 * Zod schema for the CreateWebhookRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createWebhookRequest = z.lazy(() => {
  return z.object({
    event: z.string().optional().nullable(),
    target: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateWebhookRequest} createWebhookRequest
 * @property {string}
 * @property {string}
 */
export type CreateWebhookRequest = z.infer<typeof createWebhookRequest>;

/**
 * Zod schema for mapping API responses to the CreateWebhookRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWebhookRequestResponse = z.lazy(() => {
  return z
    .object({
      event: z.string().optional().nullable(),
      target: z.string().optional().nullable(),
    })
    .transform((data) => ({
      event: data['event'],
      target: data['target'],
    }));
});

/**
 * Zod schema for mapping the CreateWebhookRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWebhookRequestRequest = z.lazy(() => {
  return z
    .object({
      event: z.string().optional().nullable(),
      target: z.string().optional().nullable(),
    })
    .transform((data) => ({
      event: data['event'],
      target: data['target'],
    }));
});

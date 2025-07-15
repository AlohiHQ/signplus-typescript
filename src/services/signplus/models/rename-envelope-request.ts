import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const renameEnvelopeRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {RenameEnvelopeRequest} renameEnvelopeRequest
 * @property {string} - Name of the envelope
 */
export type RenameEnvelopeRequest = z.infer<typeof renameEnvelopeRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const renameEnvelopeRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const renameEnvelopeRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

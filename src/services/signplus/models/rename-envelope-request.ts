import { z } from 'zod';

/**
 * Zod schema for the RenameEnvelopeRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the RenameEnvelopeRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the RenameEnvelopeRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

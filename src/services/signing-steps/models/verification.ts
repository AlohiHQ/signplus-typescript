import { z } from 'zod';

/**
 * Zod schema for the Verification model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const verification = z.lazy(() => {
  return z.object({
    type: z.string().optional().nullable(),
    value: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Verification} verification
 * @property {string}
 * @property {string}
 */
export type Verification = z.infer<typeof verification>;

/**
 * Zod schema for mapping API responses to the Verification application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const verificationResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      type: data['type'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the Verification application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const verificationRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional().nullable(),
      value: z.string().optional().nullable(),
    })
    .transform((data) => ({
      type: data['type'],
      value: data['value'],
    }));
});

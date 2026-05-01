import { z } from 'zod';

/**
 * Zod schema for the SigningStepsRecipients2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const signingStepsRecipients2 = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    uid: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SigningStepsRecipients2} signingStepsRecipients2
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type SigningStepsRecipients2 = z.infer<typeof signingStepsRecipients2>;

/**
 * Zod schema for mapping API responses to the SigningStepsRecipients2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const signingStepsRecipients2Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      uid: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
      name: data['name'],
      email: data['email'],
      role: data['role'],
    }));
});

/**
 * Zod schema for mapping the SigningStepsRecipients2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const signingStepsRecipients2Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      uid: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
      name: data['name'],
      email: data['email'],
      role: data['role'],
    }));
});

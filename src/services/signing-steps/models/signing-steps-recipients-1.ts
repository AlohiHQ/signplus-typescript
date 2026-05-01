import { z } from 'zod';
import {
  Verification,
  verification,
  verificationRequest,
  verificationResponse,
} from './verification';

/**
 * Zod schema for the SigningStepsRecipients1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const signingStepsRecipients1 = z.lazy(() => {
  return z.object({
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    role: z.string().optional().nullable(),
    id: z.string().optional().nullable(),
    uid: z.string().optional().nullable(),
    verification: verification.optional().nullable(),
  });
});

/**
 *
 * @typedef  {SigningStepsRecipients1} signingStepsRecipients1
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {Verification}
 */
export type SigningStepsRecipients1 = z.infer<typeof signingStepsRecipients1>;

/**
 * Zod schema for mapping API responses to the SigningStepsRecipients1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const signingStepsRecipients1Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
      id: z.string().optional().nullable(),
      uid: z.string().optional().nullable(),
      verification: verificationResponse.optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      email: data['email'],
      role: data['role'],
      id: data['id'],
      uid: data['uid'],
      verification: data['verification'],
    }));
});

/**
 * Zod schema for mapping the SigningStepsRecipients1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const signingStepsRecipients1Request = z.lazy(() => {
  return z
    .object({
      name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      role: z.string().optional().nullable(),
      id: z.string().optional().nullable(),
      uid: z.string().optional().nullable(),
      verification: verificationRequest.optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      email: data['email'],
      role: data['role'],
      id: data['id'],
      uid: data['uid'],
      verification: data['verification'],
    }));
});

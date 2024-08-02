import { z } from 'zod';
import {
  recipientVerification,
  recipientVerificationRequest,
  recipientVerificationResponse,
} from './recipient-verification';

/**
 * The shape of the model inside the application code - what the users use
 */
export const recipient = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
    name: z.string(),
    email: z.string(),
    role: z.string(),
    verification: recipientVerification.optional(),
  });
});

/**
 *
 * @typedef  {Recipient} recipient
 * @property {string} - Unique identifier of the recipient
 * @property {string} - Unique identifier of the user associated with the recipient
 * @property {string} - Name of the recipient
 * @property {string} - Email of the recipient
 * @property {RecipientRole} - Role of the recipient (SIGNER signs the document, RECEIVES_COPY receives a copy of the document, IN_PERSON_SIGNER signs the document in person, SENDER sends the document)
 * @property {RecipientVerification}
 */
export type Recipient = z.infer<typeof recipient>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const recipientResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
      name: z.string(),
      email: z.string(),
      role: z.string(),
      verification: recipientVerificationResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
      name: data['name'],
      email: data['email'],
      role: data['role'],
      verification: data['verification'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const recipientRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      uid: z.string().nullish(),
      name: z.string().nullish(),
      email: z.string().nullish(),
      role: z.string().nullish(),
      verification: recipientVerificationRequest.nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
      name: data['name'],
      email: data['email'],
      role: data['role'],
      verification: data['verification'],
    }));
});

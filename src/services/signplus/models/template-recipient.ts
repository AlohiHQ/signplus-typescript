import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const templateRecipient = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    role: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TemplateRecipient} templateRecipient
 * @property {string} - Unique identifier of the recipient
 * @property {string} - Unique identifier of the user associated with the recipient
 * @property {string} - Name of the recipient
 * @property {string} - Email of the recipient
 * @property {TemplateRecipientRole} - Role of the recipient (SIGNER signs the document, RECEIVES_COPY receives a copy of the document, IN_PERSON_SIGNER signs the document in person, SENDER sends the document)
 */
export type TemplateRecipient = z.infer<typeof templateRecipient>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const templateRecipientResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
      name: z.string().optional(),
      email: z.string().optional(),
      role: z.string().optional(),
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const templateRecipientRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
      name: z.string().optional(),
      email: z.string().optional(),
      role: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
      name: data['name'],
      email: data['email'],
      role: data['role'],
    }));
});

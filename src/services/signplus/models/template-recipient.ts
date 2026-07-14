import { z } from 'zod';

/**
 * Zod schema for the TemplateRecipient model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the TemplateRecipient application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the TemplateRecipient application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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

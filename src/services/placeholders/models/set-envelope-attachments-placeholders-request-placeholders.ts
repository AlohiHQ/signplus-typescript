import { z } from 'zod';

/**
 * Zod schema for the SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeAttachmentsPlaceholdersRequestPlaceholders = z.lazy(() => {
  return z.object({
    recipientId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    required: z.string().optional().nullable(),
    multiple: z.string().optional().nullable(),
    id: z.string().optional().nullable(),
    hint: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders} setEnvelopeAttachmentsPlaceholdersRequestPlaceholders
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders = z.infer<
  typeof setEnvelopeAttachmentsPlaceholdersRequestPlaceholders
>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeAttachmentsPlaceholdersRequestPlaceholdersResponse = z.lazy(() => {
  return z
    .object({
      recipient_id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      required: z.string().optional().nullable(),
      multiple: z.string().optional().nullable(),
      id: z.string().optional().nullable(),
      hint: z.string().optional().nullable(),
    })
    .transform((data) => ({
      recipientId: data['recipient_id'],
      name: data['name'],
      required: data['required'],
      multiple: data['multiple'],
      id: data['id'],
      hint: data['hint'],
    }));
});

/**
 * Zod schema for mapping the SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeAttachmentsPlaceholdersRequestPlaceholdersRequest = z.lazy(() => {
  return z
    .object({
      recipientId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      required: z.string().optional().nullable(),
      multiple: z.string().optional().nullable(),
      id: z.string().optional().nullable(),
      hint: z.string().optional().nullable(),
    })
    .transform((data) => ({
      recipient_id: data['recipientId'],
      name: data['name'],
      required: data['required'],
      multiple: data['multiple'],
      id: data['id'],
      hint: data['hint'],
    }));
});

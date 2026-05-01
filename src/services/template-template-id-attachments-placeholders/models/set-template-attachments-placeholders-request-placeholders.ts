import { z } from 'zod';

/**
 * Zod schema for the SetTemplateAttachmentsPlaceholdersRequestPlaceholders model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setTemplateAttachmentsPlaceholdersRequestPlaceholders = z.lazy(() => {
  return z.object({
    recipientId: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
    required: z.boolean().optional().nullable(),
    multiple: z.boolean().optional().nullable(),
    id: z.string().optional().nullable(),
    hint: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {SetTemplateAttachmentsPlaceholdersRequestPlaceholders} setTemplateAttachmentsPlaceholdersRequestPlaceholders
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {boolean}
 * @property {string}
 * @property {string}
 */
export type SetTemplateAttachmentsPlaceholdersRequestPlaceholders = z.infer<
  typeof setTemplateAttachmentsPlaceholdersRequestPlaceholders
>;

/**
 * Zod schema for mapping API responses to the SetTemplateAttachmentsPlaceholdersRequestPlaceholders application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateAttachmentsPlaceholdersRequestPlaceholdersResponse = z.lazy(() => {
  return z
    .object({
      recipient_id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      required: z.boolean().optional().nullable(),
      multiple: z.boolean().optional().nullable(),
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
 * Zod schema for mapping the SetTemplateAttachmentsPlaceholdersRequestPlaceholders application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateAttachmentsPlaceholdersRequestPlaceholdersRequest = z.lazy(() => {
  return z
    .object({
      recipientId: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
      required: z.boolean().optional().nullable(),
      multiple: z.boolean().optional().nullable(),
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

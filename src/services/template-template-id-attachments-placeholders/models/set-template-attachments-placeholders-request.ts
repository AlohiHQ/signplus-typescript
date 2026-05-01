import { z } from 'zod';
import {
  SetTemplateAttachmentsPlaceholdersRequestPlaceholders,
  setTemplateAttachmentsPlaceholdersRequestPlaceholders,
  setTemplateAttachmentsPlaceholdersRequestPlaceholdersRequest,
  setTemplateAttachmentsPlaceholdersRequestPlaceholdersResponse,
} from './set-template-attachments-placeholders-request-placeholders';

/**
 * Zod schema for the SetTemplateAttachmentsPlaceholdersRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setTemplateAttachmentsPlaceholdersRequest = z.lazy(() => {
  return z.object({
    placeholders: z
      .array(setTemplateAttachmentsPlaceholdersRequestPlaceholders)
      .optional()
      .nullable(),
  });
});

/**
 *
 * @typedef  {SetTemplateAttachmentsPlaceholdersRequest} setTemplateAttachmentsPlaceholdersRequest
 * @property {SetTemplateAttachmentsPlaceholdersRequestPlaceholders[]}
 */
export type SetTemplateAttachmentsPlaceholdersRequest = z.infer<
  typeof setTemplateAttachmentsPlaceholdersRequest
>;

/**
 * Zod schema for mapping API responses to the SetTemplateAttachmentsPlaceholdersRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateAttachmentsPlaceholdersRequestResponse = z.lazy(() => {
  return z
    .object({
      placeholders: z
        .array(setTemplateAttachmentsPlaceholdersRequestPlaceholdersResponse)
        .optional()
        .nullable(),
    })
    .transform((data) => ({
      placeholders: data['placeholders'],
    }));
});

/**
 * Zod schema for mapping the SetTemplateAttachmentsPlaceholdersRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setTemplateAttachmentsPlaceholdersRequestRequest = z.lazy(() => {
  return z
    .object({
      placeholders: z
        .array(setTemplateAttachmentsPlaceholdersRequestPlaceholdersRequest)
        .optional()
        .nullable(),
    })
    .transform((data) => ({
      placeholders: data['placeholders'],
    }));
});

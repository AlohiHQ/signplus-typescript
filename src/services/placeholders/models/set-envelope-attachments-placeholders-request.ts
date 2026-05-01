import { z } from 'zod';
import {
  SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders,
  setEnvelopeAttachmentsPlaceholdersRequestPlaceholders,
  setEnvelopeAttachmentsPlaceholdersRequestPlaceholdersRequest,
  setEnvelopeAttachmentsPlaceholdersRequestPlaceholdersResponse,
} from './set-envelope-attachments-placeholders-request-placeholders';

/**
 * Zod schema for the SetEnvelopeAttachmentsPlaceholdersRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeAttachmentsPlaceholdersRequest = z.lazy(() => {
  return z.object({
    placeholders: z
      .array(setEnvelopeAttachmentsPlaceholdersRequestPlaceholders)
      .optional()
      .nullable(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeAttachmentsPlaceholdersRequest} setEnvelopeAttachmentsPlaceholdersRequest
 * @property {SetEnvelopeAttachmentsPlaceholdersRequestPlaceholders[]}
 */
export type SetEnvelopeAttachmentsPlaceholdersRequest = z.infer<
  typeof setEnvelopeAttachmentsPlaceholdersRequest
>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeAttachmentsPlaceholdersRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeAttachmentsPlaceholdersRequestResponse = z.lazy(() => {
  return z
    .object({
      placeholders: z
        .array(setEnvelopeAttachmentsPlaceholdersRequestPlaceholdersResponse)
        .optional()
        .nullable(),
    })
    .transform((data) => ({
      placeholders: data['placeholders'],
    }));
});

/**
 * Zod schema for mapping the SetEnvelopeAttachmentsPlaceholdersRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeAttachmentsPlaceholdersRequestRequest = z.lazy(() => {
  return z
    .object({
      placeholders: z
        .array(setEnvelopeAttachmentsPlaceholdersRequestPlaceholdersRequest)
        .optional()
        .nullable(),
    })
    .transform((data) => ({
      placeholders: data['placeholders'],
    }));
});

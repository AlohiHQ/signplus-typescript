import { z } from 'zod';
import {
  AttachmentPlaceholderRequest1,
  attachmentPlaceholderRequest1,
  attachmentPlaceholderRequest1Request,
  attachmentPlaceholderRequest1Response,
} from './attachment-placeholder-request-1';

/**
 * Zod schema for the SetEnvelopeAttachmentsPlaceholdersRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeAttachmentsPlaceholdersRequest = z.lazy(() => {
  return z.object({
    placeholders: z.array(attachmentPlaceholderRequest1),
  });
});

/**
 *
 * @typedef  {SetEnvelopeAttachmentsPlaceholdersRequest} setEnvelopeAttachmentsPlaceholdersRequest
 * @property {AttachmentPlaceholderRequest1[]}
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
      placeholders: z.array(attachmentPlaceholderRequest1Response),
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
      placeholders: z.array(attachmentPlaceholderRequest1Request),
    })
    .transform((data) => ({
      placeholders: data['placeholders'],
    }));
});

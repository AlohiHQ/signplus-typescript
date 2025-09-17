import { z } from 'zod';
import {
  AttachmentPlaceholderRequest1,
  attachmentPlaceholderRequest1,
  attachmentPlaceholderRequest1Request,
  attachmentPlaceholderRequest1Response,
} from './attachment-placeholder-request-1';

/**
 * The shape of the model inside the application code - what the users use
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
export type SetEnvelopeAttachmentsPlaceholdersRequest = z.infer<typeof setEnvelopeAttachmentsPlaceholdersRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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

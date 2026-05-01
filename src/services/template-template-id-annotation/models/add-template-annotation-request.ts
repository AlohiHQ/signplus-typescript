import { z } from 'zod';
import {
  AddTemplateAnnotationRequestSignature,
  addTemplateAnnotationRequestSignature,
  addTemplateAnnotationRequestSignatureRequest,
  addTemplateAnnotationRequestSignatureResponse,
} from './add-template-annotation-request-signature';
import {
  AddTemplateAnnotationRequestInitials,
  addTemplateAnnotationRequestInitials,
  addTemplateAnnotationRequestInitialsRequest,
  addTemplateAnnotationRequestInitialsResponse,
} from './add-template-annotation-request-initials';
import {
  AddTemplateAnnotationRequestText,
  addTemplateAnnotationRequestText,
  addTemplateAnnotationRequestTextRequest,
  addTemplateAnnotationRequestTextResponse,
} from './add-template-annotation-request-text';
import {
  AddTemplateAnnotationRequestDatetime,
  addTemplateAnnotationRequestDatetime,
  addTemplateAnnotationRequestDatetimeRequest,
  addTemplateAnnotationRequestDatetimeResponse,
} from './add-template-annotation-request-datetime';
import {
  AddTemplateAnnotationRequestCheckbox,
  addTemplateAnnotationRequestCheckbox,
  addTemplateAnnotationRequestCheckboxRequest,
  addTemplateAnnotationRequestCheckboxResponse,
} from './add-template-annotation-request-checkbox';

/**
 * Zod schema for the AddTemplateAnnotationRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addTemplateAnnotationRequest = z.lazy(() => {
  return z.object({
    documentId: z.string().optional().nullable(),
    page: z.string().optional().nullable(),
    x: z.string().optional().nullable(),
    y: z.string().optional().nullable(),
    width: z.string().optional().nullable(),
    height: z.string().optional().nullable(),
    type: z.string().optional().nullable(),
    recipientId: z.string().optional().nullable(),
    required: z.string().optional().nullable(),
    signature: addTemplateAnnotationRequestSignature.optional().nullable(),
    initials: addTemplateAnnotationRequestInitials.optional().nullable(),
    text: addTemplateAnnotationRequestText.optional().nullable(),
    datetime: addTemplateAnnotationRequestDatetime.optional().nullable(),
    checkbox: addTemplateAnnotationRequestCheckbox.optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddTemplateAnnotationRequest} addTemplateAnnotationRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {AddTemplateAnnotationRequestSignature}
 * @property {AddTemplateAnnotationRequestInitials}
 * @property {AddTemplateAnnotationRequestText}
 * @property {AddTemplateAnnotationRequestDatetime}
 * @property {AddTemplateAnnotationRequestCheckbox}
 */
export type AddTemplateAnnotationRequest = z.infer<typeof addTemplateAnnotationRequest>;

/**
 * Zod schema for mapping API responses to the AddTemplateAnnotationRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestResponse = z.lazy(() => {
  return z
    .object({
      document_id: z.string().optional().nullable(),
      page: z.string().optional().nullable(),
      x: z.string().optional().nullable(),
      y: z.string().optional().nullable(),
      width: z.string().optional().nullable(),
      height: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      recipient_id: z.string().optional().nullable(),
      required: z.string().optional().nullable(),
      signature: addTemplateAnnotationRequestSignatureResponse.optional().nullable(),
      initials: addTemplateAnnotationRequestInitialsResponse.optional().nullable(),
      text: addTemplateAnnotationRequestTextResponse.optional().nullable(),
      datetime: addTemplateAnnotationRequestDatetimeResponse.optional().nullable(),
      checkbox: addTemplateAnnotationRequestCheckboxResponse.optional().nullable(),
    })
    .transform((data) => ({
      documentId: data['document_id'],
      page: data['page'],
      x: data['x'],
      y: data['y'],
      width: data['width'],
      height: data['height'],
      type: data['type'],
      recipientId: data['recipient_id'],
      required: data['required'],
      signature: data['signature'],
      initials: data['initials'],
      text: data['text'],
      datetime: data['datetime'],
      checkbox: data['checkbox'],
    }));
});

/**
 * Zod schema for mapping the AddTemplateAnnotationRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addTemplateAnnotationRequestRequest = z.lazy(() => {
  return z
    .object({
      documentId: z.string().optional().nullable(),
      page: z.string().optional().nullable(),
      x: z.string().optional().nullable(),
      y: z.string().optional().nullable(),
      width: z.string().optional().nullable(),
      height: z.string().optional().nullable(),
      type: z.string().optional().nullable(),
      recipientId: z.string().optional().nullable(),
      required: z.string().optional().nullable(),
      signature: addTemplateAnnotationRequestSignatureRequest.optional().nullable(),
      initials: addTemplateAnnotationRequestInitialsRequest.optional().nullable(),
      text: addTemplateAnnotationRequestTextRequest.optional().nullable(),
      datetime: addTemplateAnnotationRequestDatetimeRequest.optional().nullable(),
      checkbox: addTemplateAnnotationRequestCheckboxRequest.optional().nullable(),
    })
    .transform((data) => ({
      document_id: data['documentId'],
      page: data['page'],
      x: data['x'],
      y: data['y'],
      width: data['width'],
      height: data['height'],
      type: data['type'],
      recipient_id: data['recipientId'],
      required: data['required'],
      signature: data['signature'],
      initials: data['initials'],
      text: data['text'],
      datetime: data['datetime'],
      checkbox: data['checkbox'],
    }));
});

import { z } from 'zod';
import {
  AddEnvelopeAnnotationRequestSignature,
  addEnvelopeAnnotationRequestSignature,
  addEnvelopeAnnotationRequestSignatureRequest,
  addEnvelopeAnnotationRequestSignatureResponse,
} from './add-envelope-annotation-request-signature';
import {
  AddEnvelopeAnnotationRequestInitials,
  addEnvelopeAnnotationRequestInitials,
  addEnvelopeAnnotationRequestInitialsRequest,
  addEnvelopeAnnotationRequestInitialsResponse,
} from './add-envelope-annotation-request-initials';
import {
  AddEnvelopeAnnotationRequestText,
  addEnvelopeAnnotationRequestText,
  addEnvelopeAnnotationRequestTextRequest,
  addEnvelopeAnnotationRequestTextResponse,
} from './add-envelope-annotation-request-text';
import {
  AddEnvelopeAnnotationRequestDatetime,
  addEnvelopeAnnotationRequestDatetime,
  addEnvelopeAnnotationRequestDatetimeRequest,
  addEnvelopeAnnotationRequestDatetimeResponse,
} from './add-envelope-annotation-request-datetime';
import {
  AddEnvelopeAnnotationRequestCheckbox,
  addEnvelopeAnnotationRequestCheckbox,
  addEnvelopeAnnotationRequestCheckboxRequest,
  addEnvelopeAnnotationRequestCheckboxResponse,
} from './add-envelope-annotation-request-checkbox';

/**
 * Zod schema for the AddEnvelopeAnnotationRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeAnnotationRequest = z.lazy(() => {
  return z.object({
    documentId: z.string().optional().nullable(),
    page: z.number().optional().nullable(),
    x: z.number().optional().nullable(),
    y: z.number().optional().nullable(),
    width: z.number().optional().nullable(),
    height: z.number().optional().nullable(),
    type: z.string().optional().nullable(),
    recipientId: z.string().optional().nullable(),
    required: z.boolean().optional().nullable(),
    signature: addEnvelopeAnnotationRequestSignature.optional().nullable(),
    initials: addEnvelopeAnnotationRequestInitials.optional().nullable(),
    text: addEnvelopeAnnotationRequestText.optional().nullable(),
    datetime: addEnvelopeAnnotationRequestDatetime.optional().nullable(),
    checkbox: addEnvelopeAnnotationRequestCheckbox.optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeAnnotationRequest} addEnvelopeAnnotationRequest
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {AddEnvelopeAnnotationRequestSignature}
 * @property {AddEnvelopeAnnotationRequestInitials}
 * @property {AddEnvelopeAnnotationRequestText}
 * @property {AddEnvelopeAnnotationRequestDatetime}
 * @property {AddEnvelopeAnnotationRequestCheckbox}
 */
export type AddEnvelopeAnnotationRequest = z.infer<typeof addEnvelopeAnnotationRequest>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeAnnotationRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestResponse = z.lazy(() => {
  return z
    .object({
      document_id: z.string().optional().nullable(),
      page: z.number().optional().nullable(),
      x: z.number().optional().nullable(),
      y: z.number().optional().nullable(),
      width: z.number().optional().nullable(),
      height: z.number().optional().nullable(),
      type: z.string().optional().nullable(),
      recipient_id: z.string().optional().nullable(),
      required: z.boolean().optional().nullable(),
      signature: addEnvelopeAnnotationRequestSignatureResponse.optional().nullable(),
      initials: addEnvelopeAnnotationRequestInitialsResponse.optional().nullable(),
      text: addEnvelopeAnnotationRequestTextResponse.optional().nullable(),
      datetime: addEnvelopeAnnotationRequestDatetimeResponse.optional().nullable(),
      checkbox: addEnvelopeAnnotationRequestCheckboxResponse.optional().nullable(),
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
 * Zod schema for mapping the AddEnvelopeAnnotationRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeAnnotationRequestRequest = z.lazy(() => {
  return z
    .object({
      documentId: z.string().optional().nullable(),
      page: z.number().optional().nullable(),
      x: z.number().optional().nullable(),
      y: z.number().optional().nullable(),
      width: z.number().optional().nullable(),
      height: z.number().optional().nullable(),
      type: z.string().optional().nullable(),
      recipientId: z.string().optional().nullable(),
      required: z.boolean().optional().nullable(),
      signature: addEnvelopeAnnotationRequestSignatureRequest.optional().nullable(),
      initials: addEnvelopeAnnotationRequestInitialsRequest.optional().nullable(),
      text: addEnvelopeAnnotationRequestTextRequest.optional().nullable(),
      datetime: addEnvelopeAnnotationRequestDatetimeRequest.optional().nullable(),
      checkbox: addEnvelopeAnnotationRequestCheckboxRequest.optional().nullable(),
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

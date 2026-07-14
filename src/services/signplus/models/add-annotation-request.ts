import { z } from 'zod';
import {
  AnnotationSignature,
  annotationSignature,
  annotationSignatureRequest,
  annotationSignatureResponse,
} from './annotation-signature';
import {
  AnnotationInitials,
  annotationInitials,
  annotationInitialsRequest,
  annotationInitialsResponse,
} from './annotation-initials';
import {
  AnnotationText,
  annotationText,
  annotationTextRequest,
  annotationTextResponse,
} from './annotation-text';
import {
  AnnotationDateTime,
  annotationDateTime,
  annotationDateTimeRequest,
  annotationDateTimeResponse,
} from './annotation-date-time';
import {
  AnnotationCheckbox,
  annotationCheckbox,
  annotationCheckboxRequest,
  annotationCheckboxResponse,
} from './annotation-checkbox';

/**
 * Zod schema for the AddAnnotationRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addAnnotationRequest = z.lazy(() => {
  return z.object({
    recipientId: z.string().optional(),
    documentId: z.string(),
    page: z.number(),
    x: z.number(),
    y: z.number(),
    width: z.number(),
    height: z.number(),
    required: z.boolean().optional(),
    type: z.string(),
    signature: annotationSignature.optional(),
    initials: annotationInitials.optional(),
    text: annotationText.optional(),
    datetime: annotationDateTime.optional(),
    checkbox: annotationCheckbox.optional(),
  });
});

/**
 *
 * @typedef  {AddAnnotationRequest} addAnnotationRequest
 * @property {string} - ID of the recipient
 * @property {string} - ID of the document
 * @property {number} - Page number where the annotation is placed
 * @property {number} - X coordinate of the annotation (in % of the page width from 0 to 100) from the top left corner
 * @property {number} - Y coordinate of the annotation (in % of the page height from 0 to 100) from the top left corner
 * @property {number} - Width of the annotation (in % of the page width from 0 to 100)
 * @property {number} - Height of the annotation (in % of the page height from 0 to 100)
 * @property {boolean}
 * @property {AnnotationType} - Type of the annotation
 * @property {AnnotationSignature} - Signature annotation (null if annotation is not a signature)
 * @property {AnnotationInitials} - Initials annotation (null if annotation is not initials)
 * @property {AnnotationText} - Text annotation (null if annotation is not a text)
 * @property {AnnotationDateTime} - Date annotation (null if annotation is not a date)
 * @property {AnnotationCheckbox} - Checkbox annotation (null if annotation is not a checkbox)
 */
export type AddAnnotationRequest = z.infer<typeof addAnnotationRequest>;

/**
 * Zod schema for mapping API responses to the AddAnnotationRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addAnnotationRequestResponse = z.lazy(() => {
  return z
    .object({
      recipient_id: z.string().optional(),
      document_id: z.string(),
      page: z.number(),
      x: z.number(),
      y: z.number(),
      width: z.number(),
      height: z.number(),
      required: z.boolean().optional(),
      type: z.string(),
      signature: annotationSignatureResponse.optional(),
      initials: annotationInitialsResponse.optional(),
      text: annotationTextResponse.optional(),
      datetime: annotationDateTimeResponse.optional(),
      checkbox: annotationCheckboxResponse.optional(),
    })
    .transform((data) => ({
      recipientId: data['recipient_id'],
      documentId: data['document_id'],
      page: data['page'],
      x: data['x'],
      y: data['y'],
      width: data['width'],
      height: data['height'],
      required: data['required'],
      type: data['type'],
      signature: data['signature'],
      initials: data['initials'],
      text: data['text'],
      datetime: data['datetime'],
      checkbox: data['checkbox'],
    }));
});

/**
 * Zod schema for mapping the AddAnnotationRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addAnnotationRequestRequest = z.lazy(() => {
  return z
    .object({
      recipientId: z.string().optional(),
      documentId: z.string(),
      page: z.number(),
      x: z.number(),
      y: z.number(),
      width: z.number(),
      height: z.number(),
      required: z.boolean().optional(),
      type: z.string(),
      signature: annotationSignatureRequest.optional(),
      initials: annotationInitialsRequest.optional(),
      text: annotationTextRequest.optional(),
      datetime: annotationDateTimeRequest.optional(),
      checkbox: annotationCheckboxRequest.optional(),
    })
    .transform((data) => ({
      recipient_id: data['recipientId'],
      document_id: data['documentId'],
      page: data['page'],
      x: data['x'],
      y: data['y'],
      width: data['width'],
      height: data['height'],
      required: data['required'],
      type: data['type'],
      signature: data['signature'],
      initials: data['initials'],
      text: data['text'],
      datetime: data['datetime'],
      checkbox: data['checkbox'],
    }));
});

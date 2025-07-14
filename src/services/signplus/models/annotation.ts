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
import { AnnotationText, annotationText, annotationTextRequest, annotationTextResponse } from './annotation-text';
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
 * The shape of the model inside the application code - what the users use
 */
export const annotation = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    recipientId: z.string().optional(),
    documentId: z.string().optional(),
    page: z.number().optional(),
    x: z.number().optional(),
    y: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    required: z.boolean().optional(),
    type: z.string().optional(),
    signature: annotationSignature.optional(),
    initials: annotationInitials.optional(),
    text: annotationText.optional(),
    datetime: annotationDateTime.optional(),
    checkbox: annotationCheckbox.optional(),
  });
});

/**
 *
 * @typedef  {Annotation} annotation
 * @property {string} - Unique identifier of the annotation
 * @property {string} - ID of the recipient
 * @property {string} - ID of the document
 * @property {number} - Page number where the annotation is placed
 * @property {number} - X coordinate of the annotation (in % of the page width from 0 to 100) from the top left corner
 * @property {number} - Y coordinate of the annotation (in % of the page height from 0 to 100) from the top left corner
 * @property {number} - Width of the annotation (in % of the page width from 0 to 100)
 * @property {number} - Height of the annotation (in % of the page height from 0 to 100)
 * @property {boolean} - Whether the annotation is required
 * @property {AnnotationType} - Type of the annotation
 * @property {AnnotationSignature} - Signature annotation (null if annotation is not a signature)
 * @property {AnnotationInitials} - Initials annotation (null if annotation is not initials)
 * @property {AnnotationText} - Text annotation (null if annotation is not a text)
 * @property {AnnotationDateTime} - Date annotation (null if annotation is not a date)
 * @property {AnnotationCheckbox} - Checkbox annotation (null if annotation is not a checkbox)
 */
export type Annotation = z.infer<typeof annotation>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      recipient_id: z.string().optional(),
      document_id: z.string().optional(),
      page: z.number().optional(),
      x: z.number().optional(),
      y: z.number().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      required: z.boolean().optional(),
      type: z.string().optional(),
      signature: annotationSignatureResponse.optional(),
      initials: annotationInitialsResponse.optional(),
      text: annotationTextResponse.optional(),
      datetime: annotationDateTimeResponse.optional(),
      checkbox: annotationCheckboxResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const annotationRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      recipientId: z.string().optional(),
      documentId: z.string().optional(),
      page: z.number().optional(),
      x: z.number().optional(),
      y: z.number().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      required: z.boolean().optional(),
      type: z.string().optional(),
      signature: annotationSignatureRequest.optional(),
      initials: annotationInitialsRequest.optional(),
      text: annotationTextRequest.optional(),
      datetime: annotationDateTimeRequest.optional(),
      checkbox: annotationCheckboxRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
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

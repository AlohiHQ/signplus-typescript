import { z } from 'zod';
import { annotationSignature, annotationSignatureRequest, annotationSignatureResponse } from './annotation-signature';
import { annotationInitials, annotationInitialsRequest, annotationInitialsResponse } from './annotation-initials';
import { annotationText, annotationTextRequest, annotationTextResponse } from './annotation-text';
import { annotationDateTime, annotationDateTimeRequest, annotationDateTimeResponse } from './annotation-date-time';
import { annotationCheckbox, annotationCheckboxRequest, annotationCheckboxResponse } from './annotation-checkbox';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addAnnotationRequestRequest = z.lazy(() => {
  return z
    .object({
      recipientId: z.string().nullish(),
      documentId: z.string().nullish(),
      page: z.number().nullish(),
      x: z.number().nullish(),
      y: z.number().nullish(),
      width: z.number().nullish(),
      height: z.number().nullish(),
      required: z.boolean().nullish(),
      type: z.string().nullish(),
      signature: annotationSignatureRequest.nullish(),
      initials: annotationInitialsRequest.nullish(),
      text: annotationTextRequest.nullish(),
      datetime: annotationDateTimeRequest.nullish(),
      checkbox: annotationCheckboxRequest.nullish(),
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

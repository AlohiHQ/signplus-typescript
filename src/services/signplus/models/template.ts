import { z } from 'zod';
import {
  TemplateSigningStep,
  templateSigningStep,
  templateSigningStepRequest,
  templateSigningStepResponse,
} from './template-signing-step';
import { Document, document, documentRequest, documentResponse } from './document';
import {
  EnvelopeNotification,
  envelopeNotification,
  envelopeNotificationRequest,
  envelopeNotificationResponse,
} from './envelope-notification';

/**
 * The shape of the model inside the application code - what the users use
 */
export const template = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    comment: z.string().optional(),
    pages: z.number().optional(),
    legalityLevel: z.string().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    expirationDelay: z.number().optional(),
    numRecipients: z.number().optional(),
    signingSteps: z.array(templateSigningStep).optional(),
    documents: z.array(document).optional(),
    notification: envelopeNotification.optional(),
    dynamicFields: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {Template} template
 * @property {string} - Unique identifier of the template
 * @property {string} - Name of the template
 * @property {string} - Comment for the template
 * @property {number} - Total number of pages in the template
 * @property {EnvelopeLegalityLevel} - Legal level of the envelope (SES is Simple Electronic Signature, QES_EIDAS is Qualified Electronic Signature, QES_ZERTES is Qualified Electronic Signature with Zertes)
 * @property {number} - Unix timestamp of the creation date
 * @property {number} - Unix timestamp of the last modification date
 * @property {number} - Expiration delay added to the current time when an envelope is created from this template
 * @property {number} - Number of recipients in the envelope
 * @property {TemplateSigningStep[]}
 * @property {Document[]}
 * @property {EnvelopeNotification}
 * @property {string[]} - List of dynamic fields
 */
export type Template = z.infer<typeof template>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const templateResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      comment: z.string().optional(),
      pages: z.number().optional(),
      legality_level: z.string().optional(),
      created_at: z.number().optional(),
      updated_at: z.number().optional(),
      expiration_delay: z.number().optional(),
      num_recipients: z.number().optional(),
      signing_steps: z.array(templateSigningStepResponse).optional(),
      documents: z.array(documentResponse).optional(),
      notification: envelopeNotificationResponse.optional(),
      dynamic_fields: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      comment: data['comment'],
      pages: data['pages'],
      legalityLevel: data['legality_level'],
      createdAt: data['created_at'],
      updatedAt: data['updated_at'],
      expirationDelay: data['expiration_delay'],
      numRecipients: data['num_recipients'],
      signingSteps: data['signing_steps'],
      documents: data['documents'],
      notification: data['notification'],
      dynamicFields: data['dynamic_fields'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const templateRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      comment: z.string().optional(),
      pages: z.number().optional(),
      legalityLevel: z.string().optional(),
      createdAt: z.number().optional(),
      updatedAt: z.number().optional(),
      expirationDelay: z.number().optional(),
      numRecipients: z.number().optional(),
      signingSteps: z.array(templateSigningStepRequest).optional(),
      documents: z.array(documentRequest).optional(),
      notification: envelopeNotificationRequest.optional(),
      dynamicFields: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      comment: data['comment'],
      pages: data['pages'],
      legality_level: data['legalityLevel'],
      created_at: data['createdAt'],
      updated_at: data['updatedAt'],
      expiration_delay: data['expirationDelay'],
      num_recipients: data['numRecipients'],
      signing_steps: data['signingSteps'],
      documents: data['documents'],
      notification: data['notification'],
      dynamic_fields: data['dynamicFields'],
    }));
});

import { z } from 'zod';
import { signingStep, signingStepRequest, signingStepResponse } from './signing-step';
import { document, documentRequest, documentResponse } from './document';
import {
  envelopeNotification,
  envelopeNotificationRequest,
  envelopeNotificationResponse,
} from './envelope-notification';

/**
 * The shape of the model inside the application code - what the users use
 */
export const envelope = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    comment: z.string().optional(),
    pages: z.number().optional(),
    flowType: z.string().optional(),
    legalityLevel: z.string().optional(),
    status: z.string().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    expiresAt: z.number().optional(),
    numRecipients: z.number().optional(),
    isDuplicable: z.boolean().optional(),
    signingSteps: z.array(signingStep).optional(),
    documents: z.array(document).optional(),
    notification: envelopeNotification.optional(),
  });
});

/**
 *
 * @typedef  {Envelope} envelope
 * @property {string} - Unique identifier of the envelope
 * @property {string} - Name of the envelope
 * @property {string} - Comment for the envelope
 * @property {number} - Total number of pages in the envelope
 * @property {EnvelopeFlowType} - Flow type of the envelope (REQUEST_SIGNATURE is a request for signature)
 * @property {EnvelopeLegalityLevel} - Legal level of the envelope (SES is Simple Electronic Signature, QES_EIDAS is Qualified Electronic Signature, QES_ZERTES is Qualified Electronic Signature with Zertes)
 * @property {EnvelopeStatus} - Status of the envelope
 * @property {number} - Unix timestamp of the creation date
 * @property {number} - Unix timestamp of the last modification date
 * @property {number} - Unix timestamp of the expiration date
 * @property {number} - Number of recipients in the envelope
 * @property {boolean} - Whether the envelope can be duplicated
 * @property {SigningStep[]}
 * @property {Document[]}
 * @property {EnvelopeNotification}
 */
export type Envelope = z.infer<typeof envelope>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const envelopeResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      comment: z.string().optional(),
      pages: z.number().optional(),
      flow_type: z.string().optional(),
      legality_level: z.string().optional(),
      status: z.string().optional(),
      created_at: z.number().optional(),
      updated_at: z.number().optional(),
      expires_at: z.number().optional(),
      num_recipients: z.number().optional(),
      is_duplicable: z.boolean().optional(),
      signing_steps: z.array(signingStepResponse).optional(),
      documents: z.array(documentResponse).optional(),
      notification: envelopeNotificationResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      comment: data['comment'],
      pages: data['pages'],
      flowType: data['flow_type'],
      legalityLevel: data['legality_level'],
      status: data['status'],
      createdAt: data['created_at'],
      updatedAt: data['updated_at'],
      expiresAt: data['expires_at'],
      numRecipients: data['num_recipients'],
      isDuplicable: data['is_duplicable'],
      signingSteps: data['signing_steps'],
      documents: data['documents'],
      notification: data['notification'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const envelopeRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      name: z.string().nullish(),
      comment: z.string().nullish(),
      pages: z.number().nullish(),
      flowType: z.string().nullish(),
      legalityLevel: z.string().nullish(),
      status: z.string().nullish(),
      createdAt: z.number().nullish(),
      updatedAt: z.number().nullish(),
      expiresAt: z.number().nullish(),
      numRecipients: z.number().nullish(),
      isDuplicable: z.boolean().nullish(),
      signingSteps: z.array(signingStepRequest).nullish(),
      documents: z.array(documentRequest).nullish(),
      notification: envelopeNotificationRequest.nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      comment: data['comment'],
      pages: data['pages'],
      flow_type: data['flowType'],
      legality_level: data['legalityLevel'],
      status: data['status'],
      created_at: data['createdAt'],
      updated_at: data['updatedAt'],
      expires_at: data['expiresAt'],
      num_recipients: data['numRecipients'],
      is_duplicable: data['isDuplicable'],
      signing_steps: data['signingSteps'],
      documents: data['documents'],
      notification: data['notification'],
    }));
});

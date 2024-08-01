import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createEnvelopeRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    flowType: z.string().optional(),
    legalityLevel: z.string().optional(),
    expiresAt: z.number().optional(),
    comment: z.string().optional(),
    sandbox: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {CreateEnvelopeRequest} createEnvelopeRequest
 * @property {string} - Name of the envelope
 * @property {EnvelopeFlowType} - Flow type of the envelope (REQUEST_SIGNATURE is a request for signature, SIGN_MYSELF is a self-signing flow)
 * @property {EnvelopeLegalityLevel} - Legal level of the envelope (SES is Simple Electronic Signature, QES_EIDAS is Qualified Electronic Signature, QES_ZERTES is Qualified Electronic Signature with Zertes)
 * @property {number} - Unix timestamp of the expiration date
 * @property {string} - Comment for the envelope
 * @property {boolean} - Whether the envelope is created in sandbox mode
 */
export type CreateEnvelopeRequest = z.infer<typeof createEnvelopeRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvelopeRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      flow_type: z.string().optional(),
      legality_level: z.string().optional(),
      expires_at: z.number().optional(),
      comment: z.string().optional(),
      sandbox: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      flowType: data['flow_type'],
      legalityLevel: data['legality_level'],
      expiresAt: data['expires_at'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createEnvelopeRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      flowType: z.string().nullish(),
      legalityLevel: z.string().nullish(),
      expiresAt: z.number().nullish(),
      comment: z.string().nullish(),
      sandbox: z.boolean().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      flow_type: data['flowType'],
      legality_level: data['legalityLevel'],
      expires_at: data['expiresAt'],
      comment: data['comment'],
      sandbox: data['sandbox'],
    }));
});

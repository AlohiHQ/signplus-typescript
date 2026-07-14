import { z } from 'zod';

/**
 * Zod schema for the SetEnvelopeLegalityLevelRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const setEnvelopeLegalityLevelRequest = z.lazy(() => {
  return z.object({
    legalityLevel: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SetEnvelopeLegalityLevelRequest} setEnvelopeLegalityLevelRequest
 * @property {EnvelopeLegalityLevel} - Legal level of the envelope (SES is Simple Electronic Signature, QES_EIDAS is Qualified Electronic Signature, QES_ZERTES is Qualified Electronic Signature with Zertes)
 */
export type SetEnvelopeLegalityLevelRequest = z.infer<typeof setEnvelopeLegalityLevelRequest>;

/**
 * Zod schema for mapping API responses to the SetEnvelopeLegalityLevelRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeLegalityLevelRequestResponse = z.lazy(() => {
  return z
    .object({
      legality_level: z.string().optional(),
    })
    .transform((data) => ({
      legalityLevel: data['legality_level'],
    }));
});

/**
 * Zod schema for mapping the SetEnvelopeLegalityLevelRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const setEnvelopeLegalityLevelRequestRequest = z.lazy(() => {
  return z
    .object({
      legalityLevel: z.string().optional(),
    })
    .transform((data) => ({
      legality_level: data['legalityLevel'],
    }));
});

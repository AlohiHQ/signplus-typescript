import { z } from 'zod';

/**
 * Zod schema for the AddEnvelopeDocumentRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addEnvelopeDocumentRequest = z.lazy(() => {
  return z.object({
    file: z.instanceof(ArrayBuffer).optional().nullable(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeDocumentRequest} addEnvelopeDocumentRequest
 * @property {ArrayBuffer}
 */
export type AddEnvelopeDocumentRequest = z.infer<typeof addEnvelopeDocumentRequest>;

/**
 * Zod schema for mapping API responses to the AddEnvelopeDocumentRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeDocumentRequestResponse = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});

/**
 * Zod schema for mapping the AddEnvelopeDocumentRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addEnvelopeDocumentRequestRequest = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer).optional().nullable(),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});

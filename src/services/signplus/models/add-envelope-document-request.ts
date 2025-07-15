import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const addEnvelopeDocumentRequest = z.lazy(() => {
  return z.object({
    file: z.instanceof(ArrayBuffer).optional(),
  });
});

/**
 *
 * @typedef  {AddEnvelopeDocumentRequest} addEnvelopeDocumentRequest
 * @property {ArrayBuffer} - File to upload in binary format
 */
export type AddEnvelopeDocumentRequest = z.infer<typeof addEnvelopeDocumentRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addEnvelopeDocumentRequestResponse = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer).optional(),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addEnvelopeDocumentRequestRequest = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer).optional(),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const addTemplateDocumentRequest = z.lazy(() => {
  return z.object({
    file: z.instanceof(ArrayBuffer),
  });
});

/**
 *
 * @typedef  {AddTemplateDocumentRequest} addTemplateDocumentRequest
 * @property {ArrayBuffer} - File to upload in binary format
 */
export type AddTemplateDocumentRequest = z.infer<typeof addTemplateDocumentRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addTemplateDocumentRequestResponse = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addTemplateDocumentRequestRequest = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});
